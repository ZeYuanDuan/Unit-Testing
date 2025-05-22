import jwt from "jsonwebtoken";

// 利用 callback function 處理非同步操作的結果
// jwt.sign 需要一個 callback function 作為最後一個參數
// callback function 會收到兩個參數：error 和 token (順序固定)
// - error: 若有錯誤發生則包含錯誤資訊，成功時為 null
// - token: 成功時包含產生的 JWT token，失敗時為 undefined
export function generateToken(userEmail, doneFn) {
  jwt.sign({ email: userEmail }, "secret123", doneFn);
}

export function generateTokenPromise(userEmail) {
  const promise = new Promise((resolve, reject) => {
    jwt.sign({ email: userEmail }, "secret123", (error, token) => {
      if (error) {
        reject(error);
      } else {
        resolve(token);
      }
    });
  });

  return promise;
}

// generateToken('test@test.com', (err, token) => {
//   console.log(token);
// });

// generateTokenPromise('test@test.com').then((token) => console.log(token));
