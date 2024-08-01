// src/pwaInstall.ts
export {};

let deferredPrompt: any = null;

// Function to handle the install prompt
function handleInstallPrompt() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult: any) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
      } else {
        console.log("User dismissed the install prompt");
      }
      deferredPrompt = null;
    });
  }
}

// Listen for the beforeinstallprompt event
window.addEventListener("beforeinstallprompt", (e: Event) => {
  e.preventDefault();
  deferredPrompt = e as any;

  // Optionally show a custom UI element to prompt installation
  // Example: Show a button when the prompt is available
  const installButton = document.getElementById("install-button");
  if (installButton) {
    installButton.style.display = "block";
    installButton.addEventListener("click", handleInstallPrompt);
  }
});

// Listen for the appinstalled event
window.addEventListener("appinstalled", () => {
  console.log("PWA was installed");
  deferredPrompt = null;
});
