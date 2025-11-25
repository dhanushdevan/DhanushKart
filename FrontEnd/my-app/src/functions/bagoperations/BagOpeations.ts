
import data from '../../Data/product.json';
const idIsPreset=(id: number)=>{
  return data.phones.some(phone=>phone.id===id);
}
const handleAddToBag=(productId:number, isloginedin:boolean)=>{
  if(isloginedin===false){
    window.location.href='/login';
    return;
  }
  console.log('App received AddToBag for product', productId);
}

export {idIsPreset,handleAddToBag};
