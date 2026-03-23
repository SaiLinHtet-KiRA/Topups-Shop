import mongoose, { HydratedDocument } from "mongoose";
import DepositModel from "../Financial/Deposit.model";
import TopupModel from "../Topup/Topup.model";

export interface RecordsType<record = mongoose.Schema.Types.ObjectId> {
  records: record[];
  size: number;
}

export type RecordsDocument<record = mongoose.Schema.Types.ObjectId> =
  HydratedDocument<RecordsType<record>>;

function getSchema(ref: mongoose.Model<any>) {
  const RecordsSchema = new mongoose.Schema<RecordsType>(
    {
      size: { type: Number, default: 0 },
      records: {
        type: [mongoose.Schema.Types.ObjectId],
        default: [],
        ref: ref,
      },
    },
    {
      timestamps: false,
      versionKey: false,
    },
  );

  RecordsSchema.pre("findOneAndUpdate", async function () {
    try {
      const update = this.getUpdate() as any;

      if (update.$push && update.$push.records) {
        let increment = 1;

        if (update.$push.records.$each) {
          increment = update.$push.records.$each.length;
        }
        update.$inc = {
          ...(update.$inc || {}),
          size: increment,
        };

        this.setUpdate(update);
      }
    } catch (error) {
      throw error;
    }
  });

  return RecordsSchema;
}

const DepositsModel = mongoose.connection
  .useDb("Records")
  .model<RecordsType>("DepositLists", getSchema(DepositModel));

const TopupsModel = mongoose.connection
  .useDb("Records")
  .model<RecordsType>("TopupLists", getSchema(TopupModel));

export { DepositsModel, TopupsModel };
