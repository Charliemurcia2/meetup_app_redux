(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{63:function(e,t,n){e.exports={list:"MeetupList_list__13kvz"}},64:function(e,t,n){e.exports={item:"MeetupItem_item__-oVtf",image:"MeetupItem_image__1UjdA",content:"MeetupItem_content___ZhVb",actions:"MeetupItem_actions__2Rip3"}},65:function(e,t,n){e.exports={"guests-card":"Guests_guests-card__cOgHU","confirmed-button":"Guests_confirmed-button__3aLFU","rejected-button":"Guests_rejected-button__eOrLY","requested-button":"Guests_requested-button__3N_w-",status:"Guests_status__1wTn_"}},66:function(e,t,n){"use strict";var a=n(37),c=n(0),u=n.n(c),r=n(2),l=n(63),o=n.n(l),s=n(12),i=n(3),m=n(14),p=n(35),f=n(64),d=n.n(f),b=n(34),E=n(15),_=n(36),j=n(65),v=n.n(j),O=function(e){var t=Object(r.c)(function(e){return e.user.users}),n=Object(r.c)(function(e){return e.meetup.meetupURL}),a=Object(r.b)(),l=Object(E.a)().callAPI,o="string"===typeof e.attendeesId?e.attendeesId.split(","):e.attendeesId,s=[];o?o.forEach(function(e){var n=t.filter(function(t){return t.id===e});n[0]&&s.push(n[0])}):s=[];return u.a.createElement(c.Fragment,null,u.a.createElement("div",{className:v.a["guests-card"]},u.a.createElement("h2",null,"Attendees ",u.a.createElement("span",null,"(",s.length,")")),s&&u.a.createElement("ul",null,s.map(function(t){return u.a.createElement("li",{key:t.id},u.a.createElement("img",{src:t.image,alt:"profile"}),u.a.createElement("p",null,t.name),u.a.createElement("button",{onClick:function(c){return function(t){var c=o.filter(function(e){return e!==t});l("".concat(n,"/").concat(e.meetupId,".json"),"PATCH",{attendeesId:c}).then(function(){l("".concat(n,".json")).then(function(e){a(m.b.formatData(e))})})}(t.id)}},"Remove"))}))))},g=function(e){var t=Object(i.f)(),n=e.meetup,a=n.image,l=n.title,o=n.description,f=n.address,j=n.id,v=n.date,g=n.attendeesId,I=Object(r.c)(function(e){return e.meetup.meetupURL}),h=Object(r.c)(function(e){return e.favorite.favorites}),D=Object(r.b)(),U=Object(E.a)().callAPI,k=Object(c.useState)(!1),L=Object(s.a)(k,2),N=L[0],P=L[1];!function(e){h.some(function(t){return t===e})&&(D(p.b.isFavorite(e)),P(!0))}(j);return u.a.createElement("li",{className:d.a.item},u.a.createElement(b.a,null,u.a.createElement("div",{className:d.a.image},u.a.createElement("img",{src:a,alt:""})),u.a.createElement("div",{className:d.a.content},u.a.createElement("h3",null,l),u.a.createElement("p",null,v),u.a.createElement("address",null,f),u.a.createElement("p",null,o)),u.a.createElement("div",{className:d.a.actions},u.a.createElement("button",{onClick:function(){N||"/favorites"===t.pathname?(D(p.b.removeFromFavorites(j)),P(!1)):(D(p.b.addToFavorite({id:j,title:l,description:o,image:a,address:f,date:v,attendeesId:g})),P(!0))}},N||"/favorites"===t.pathname?"Remove from favorites":"To Favorites"),"/"===t.pathname?u.a.createElement("button",{onClick:function(){U("".concat(I,"/").concat(j,".json"),"DELETE").then(function(){U("".concat(I,".json")).then(function(e){D(m.b.formatData(e))}),D(m.b.toggleDeletePopUp())})}},"Delete Meetup"):""),u.a.createElement(_.a,null,u.a.createElement(O,{attendeesId:e.meetup.attendeesId,meetupId:e.meetup.id}))))};t.a=function(e){var t=Object(r.c)(function(e){return e.meetup.meetups}),n=e.meetups?Object(a.a)(e.meetups):Object(a.a)(t);return u.a.createElement("ul",{className:o.a.list},n.map(function(e){return u.a.createElement(g,{key:e.id,meetup:e})}))}},67:function(e,t,n){e.exports={popup:"DeletePopup_popup__2FQA1",close:"DeletePopup_close__Ifaab"}},70:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),u=n(2),r=n(14),l=n(17),o=n(66),s=n(34),i=n(67),m=n.n(i),p=function(e){var t=Object(u.c)(function(e){return e.meetup.isPopupDelete}),n=Object(u.b)();return t?c.a.createElement(s.a,null,c.a.createElement("div",{className:m.a.popup},c.a.createElement("div",null,c.a.createElement("h4",null,"Item Deleted")),c.a.createElement("div",null,c.a.createElement("button",{className:m.a.close,onClick:function(e){n(r.b.toggleDeletePopUp())}},"Close")))):""},f=n(21),d=n(15);t.default=function(){var e=Object(d.a)(),t=e.isLoading,n=e.callAPI,s=Object(u.c)(function(e){return e.meetup.meetupURL}),i=Object(u.c)(function(e){return e.user.usersURL}),m=Object(u.b)();return Object(a.useEffect)(function(){n("".concat(s,".json")).then(function(e){m(r.b.formatData(e))}),n("".concat(i,".json")).then(function(e){m(l.b.formatUsers(e))})},[]),c.a.createElement("section",null,t&&c.a.createElement(f.a,null),c.a.createElement(p,null),c.a.createElement("h1",null,"All Meetups"),c.a.createElement(o.a,null))}}}]);
//# sourceMappingURL=3.5dc62044.chunk.js.map