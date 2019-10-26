function start() {
  this.uptime = process.uptime();
  setTimeout(() => {
    console.log('uptime:', this.uptime);
  }, 5000);
}

start();