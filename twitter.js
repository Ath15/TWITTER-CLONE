const mainPage = document.querySelector('.main-page');
const loginPage = document.querySelector('.login-page');

const middleContent = document.querySelector('.middle-content');
 const btnTop = document.querySelector('.button');

 const newsFeedPage = document.querySelector('.feeds-page');
  const loginModal = document.querySelector('.login-modal');
  const modalX = document.querySelector('.login-modal i');
  const loginForBtn = document.querySelector('.login-form-button');
  const postBtn = document.querySelector('.post-button');
  const modalWrapper = document.querySelector('.modal-wrapper');
  const modal = document.querySelector('.modal');
  const user = document.querySelector('.feeds-user');
  const sidebar = document.querySelector('.sidebar');
  const sidebarWrapper = document.querySelector('.sidebar-wrapper');


const goTosideBar = () => {
      sidebar.style.display = 'block';
      sidebarWrapper.style.display = 'block';


}
const goToLoginPage = () => {

	mainPage.style.display = 'none';
    
    loginPage.style.display = 'grid';
};
middleContent.addEventListener('click' , e =>{

	if (e.target.classList[1] === 'main-btn') {
		goToLoginPage();
	}


	});


btnTop.addEventListener('click' , e =>{

    const inputUserInfo = document.querySelector('.user-info');
    const inputPassword = document.querySelector('.user-password');
     
     if(inputUserInfo.value !== "" &&  inputPassword.value !== ""){
     	mainPage.style.display = 'none';
     	newsFeedPage.style.display = 'grid';
     } 
     else{
     	goToLoginPage();
     	loginModal.style.display = 'block';
     }

});

modalX.addEventListener('click' , () => {

	loginModal.style.display = 'none';

	});

loginForBtn.addEventListener('click' , () => {

      const loginUserInfo = document.querySelector('.login-user-info');
      const loginPassword = document.querySelector('.login-password');

         if(loginUserInfo.value !== ""  && loginPassword !== "" ){
         	loginPage.style.display = 'none';
         	newsFeedPage.style.display = 'block';

         }
         else{
         	loginModal.style.display = 'block';
         }


	});

postBtn.addEventListener('click' , () => 
{


      modal.style.display = 'block';
      modalWrapper.classList.add('modal-wrapper-display');

});

user.addEventListener('click' , () =>
{
      goTosideBar();

      sidebar.classList.add
      ('sidebar-display');
      sidebarWrapper.classList.add
      ('.sidebar-wrapper-display');


}); 









