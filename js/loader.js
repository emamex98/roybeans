let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
      clearInterval(stateCheck);
      document.getElementById("loader").style.display = "none";
      document.getElementById("content").style.display = "inline";
      console.log("ready");
    }
  }, 100);