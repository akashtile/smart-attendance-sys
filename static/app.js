let video = document.querySelector("video");
let canvas = document.querySelector("canvas");
let interval = null;
let folder = null;


window.onload = () => {
  video = document.getElementById("video");
  canvas = document.getElementById("canvas");

  if (video) {
    startCamera();
  }
};

async function startCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    video.srcObject = stream;
    video.onloadedmetadata = () => video.play();
  } catch (err) {
    alert("Camera access denied or not available");
    console.error(err);
  }
}


async function startRecognition() {
  interval = setInterval(async () => {
    canvas.width = 320;
    canvas.height = 240;
    canvas.getContext("2d").drawImage(video, 0, 0, 320, 240);

    const image = canvas.toDataURL("image/jpeg");

    const res = await fetch("/api/recognize", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ image })
    });

    const data = await res.json();

    document.getElementById("result").innerText = "Recognizing...";
    showToast("Recognition started");

    if (data.name === "UNKNOWN") {
      resultBox.innerText = "Unknown Person";
      resultBox.style.color = "red";
    } 
    else if (data.marked === true) {
      resultBox.innerText = `${data.name} marked PRESENT`;
      resultBox.style.color = "green";
    }
    else {
      resultBox.innerText = `${data.name} already marked today`;
      resultBox.style.color = "orange";
    }

  }, 600);
}


function stopRecognition() {
  clearInterval(interval);
  document.getElementById("result").innerText = "🔴 Stopped";
  showToast("Recognition stopped");
}

async function registerStudent() {
  const name = document.getElementById("name").value;
  const roll = document.getElementById("roll").value;
  const erp = document.getElementById("erp").value;

  const res = await fetch("/api/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, roll, erp })
  });

  const data = await res.json();
  folder = data.folder;
  showToast("✅ Student Registered");

}

function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.innerText = msg;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}


async function captureImages() {
  if (!folder) return alert("Register first!");

  const status = document.getElementById("capture-status");
  status.style.color = "#2563eb";
  status.innerText = "📸 Capturing image 5/20"


  let images = [];

  for (let i = 0; i < 20; i++) {
    canvas.width = 320;
    canvas.height = 240;
    canvas.getContext("2d").drawImage(video, 0, 0, 320, 240);

    images.push(canvas.toDataURL("image/jpeg"));
    status.innerText = `📸 Capturing image ${i+1} / 20`;

    await new Promise(r => setTimeout(r, 250));
  }

  status.innerText = "⏳ Uploading to server...";

  const res = await fetch("/api/save-images", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ folder, images })
  });

  const data = await res.json();

  if (data.success) {
    status.style.color = "green";
    showToast("✅ Images saved successfully");
    status.innerText = `✅ Done! ${data.saved} images captured successfully`;
  } else {
    status.style.color = "red";
    status.innerText = "❌ Capture failed";
  }

}


 

