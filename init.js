//app.js 에서 export 한 것 불러오기
import app from "./app";

const PORT = 4000;

const handleListening = () =>
  console.log(`✅ Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);
