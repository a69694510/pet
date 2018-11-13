import {httpPost,httpBinaryPost} from '../../common/httpbean'

export function subpetInfo(petForm){
  let formObj = {};
  formObj.petnickname = perForm.petnickname.value;
  formObj.petimg = perForm.petimg.file[0];
  function cf(res){
    alert(res.data);
  }
  httpBinaryPost('pet/petinfo',formObj,cf)
}
