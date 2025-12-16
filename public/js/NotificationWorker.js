self.addEventListener("push", (event) => {
  const data = event.data.json();
  console.log("notification", data);
  self.registration.showNotification(data.title, {
    body: data.body,
    icon: "/icon.png",
  });
});
