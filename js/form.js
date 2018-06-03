// var config = {
//     apiKey: "AIzaSyAi2rmSnCZoSehOuJNenOMqip-rRFYBXFs",
//     authDomain: "poppower-8c0ef.firebaseapp.com",
//     databaseURL: "https://poppower-8c0ef.firebaseio.com",
//     projectId: "poppower-8c0ef",
//     storageBucket: "poppower-8c0ef.appspot.com",
//     messagingSenderId: "901998159862"
// };
// firebase.initializeApp(config);
//
// var btnAddMember = document.getElementById('new-member');
//
// btnAddMember.addEventListener('click', function() {
//     const addedMembers = () => {
//         const dbRefMembers = firebase.database().ref().child("Members");
//         dbRefMembers.on('child_added', (snap) => {
//             console.log(snap.val().Duties.forEach(element => {
//                 console.log($(`<li>${element}</li>`));
//                 //$("#listDuties").append((`<li>${element}</li>`)
//             }));
//             const spanId = $(`<section class="section col s4">
//             <div class="card" id="${snap.val().Id}">
//                 <div class="card-image waves-effect waves-block waves-light activator">
//                     <img class="activator" src="${snap.val()["Profile picture"]}">
//                 </div>
//                 <div class="card-content">
//         <span class="card-title activator grey-text text-darken-4">${snap.val().Name}<i class="material-icons right">more_vert</i></span>
//                     <p>${snap.val().Position}</p>
//                     <p>${snap.val().Location}</p>
//                     <p><a href="${snap.val().Contact.urlSlack}">${snap.val().Contact.Slack}</a></p>
//                 </div>
//                 <div class="card-reveal">
//                     <img src="${snap.val()["Profile picture"]}">
//                     <span class="card-title grey-text text-darken">${snap.val().Name}<i class="material-icons right">close</i></span>
//                     <div>
//                         <div class="col s12">
//                             <div class="col s6">
//                                 <p class="e8f5e9 green lighten-5"> Contact </p>
//                                 <br>
//                                 <a href="#">${snap.val().Contact.Email}</a>
//                                 <br>
//                                 <a href="${snap.val().urlSlack}">${snap.val().Contact.Slack}</a>
//                             </div>
//                             <div class="col s6">
//                                 <span class="e8f5e9 green lighten-5"> Duties </span>
//                                 <ul id="listDuties-${snap.val().Id}"></ul>
//                                 <span class="e8f5e9 green lighten-5"> Projects </span>
//                                 <ul id="listProjects-${snap.val().Id}"></ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>`);
//             $("#team").append(spanId);
//             snap.val().Duties.forEach(element => {
//                 console.log($(`<li>${element}</li>`));
//                 $(`#listDuties-${snap.val().Id}`).append(`<li>${element}</li>`)
//             })
//             snap.val().Projects.forEach(element => {
//                 console.log($(`<li>${element}</li>`));
//                 $(`#listProjects-${snap.val().Id}`).append(`<li>${element}</li>`)
//             })
//             /*
//             for( let i = 0; i < snap.val().Duties.length; i++) {
//                 const newLi = $(`<li><a href="/user/messages"><span class="tab">${snap.val().Duties[i]}</span></a></li>`)
//                     $("#listDuties").append(newLi);
//                 };
//                 */
//             console.log(spanId);
//         });
//     };
//
//     addedMembers();
// })
