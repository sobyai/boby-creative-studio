import {getStore} from '@netlify/blobs';
import {creative} from '../../lib/creative.mjs';
import {parse,valid,readInput,clearInput,writeResult} from '../../lib/transport.mjs';
export const handler=async event=>{if(event.httpMethod!=='POST')return;const x=parse(event);if(!valid(x.id))return;const store=getStore({name:'boby-private',consistency:'strong'});try{const payload=await readInput(store,x.id,x.count);const result=await writeResult(store,x.id,await creative('/api/text',payload));await store.setJSON(`job/${x.id}`,result);}catch(e){await store.setJSON(`job/${x.id}`,{error:e.message});}finally{if(Number.isInteger(x.count)&&x.count>0&&x.count<=180)await clearInput(store,x.id,x.count);}};
