export const json=(statusCode,value)=>({statusCode,headers:{'Content-Type':'application/json','Cache-Control':'no-store'},body:JSON.stringify(value)});
export const valid=id=>typeof id==='string'&&/^[a-f0-9-]{36}$/.test(id);
export const parse=e=>JSON.parse(e.isBase64Encoded?Buffer.from(e.body||'','base64').toString():e.body||'{}');
export const MAX=90_000_000, CHUNK=500_000;
export async function readInput(store,id,count){if(!valid(id)||!Number.isInteger(count)||count<1||count>180)throw Error('Invalid upload');let parts=[];for(let i=0;i<count;i++){let part=await store.get(`input/${id}/${i}`);if(part===null)throw Error('Missing upload part');parts.push(part);}return JSON.parse(parts.join(''));}
export async function clearInput(store,id,count){for(let i=0;i<count;i++)await store.delete(`input/${id}/${i}`);}
export async function writeResult(store,id,value){let raw=JSON.stringify(value);if(raw.length>MAX)throw Error('Response too large');await store.set(`result/${id}`,raw);return {id,length:raw.length};}
