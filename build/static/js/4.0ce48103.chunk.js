(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{63:function(e,t,n){e.exports={list:"MeetupList_list__13kvz"}},64:function(e,t,n){e.exports={item:"MeetupItem_item__-oVtf",image:"MeetupItem_image__1UjdA",content:"MeetupItem_content___ZhVb",actions:"MeetupItem_actions__2Rip3"}},65:function(e,t,n){e.exports={"guests-card":"Guests_guests-card__cOgHU","confirmed-button":"Guests_confirmed-button__3aLFU","rejected-button":"Guests_rejected-button__eOrLY","requested-button":"Guests_requested-button__3N_w-",status:"Guests_status__1wTn_"}},66:function(e,t,n){"use strict";var a=n(37),c=n(0),r=n.n(c),u=n(2),o=n(63),i=n.n(o),s=n(12),l=n(3),m=n(14),d=n(35),f=n(64),p=n.n(f),b=n(34),E=n(15),_=n(36),v=n(65),j=n.n(v),g=function(e){var t=Object(u.c)(function(e){return e.user.users}),n=Object(u.c)(function(e){return e.meetup.meetupURL}),a=Object(u.b)(),o=Object(E.a)().callAPI,i="string"===typeof e.attendeesId?e.attendeesId.split(","):e.attendeesId,s=[];i?i.forEach(function(e){var n=t.filter(function(t){return t.id===e});n[0]&&s.push(n[0])}):s=[];return r.a.createElement(c.Fragment,null,r.a.createElement("div",{className:j.a["guests-card"]},r.a.createElement("h2",null,"Attendees ",r.a.createElement("span",null,"(",s.length,")")),s&&r.a.createElement("ul",null,s.map(function(t){return r.a.createElement("li",{key:t.id},r.a.createElement("img",{src:t.image,alt:"profile"}),r.a.createElement("p",null,t.name),r.a.createElement("button",{onClick:function(c){return function(t){var c=i.filter(function(e){return e!==t});o("".concat(n,"/").concat(e.meetupId,".json"),"PATCH",{attendeesId:c}).then(function(){o("".concat(n,".json")).then(function(e){a(m.b.formatData(e))})})}(t.id)}},"Remove"))}))))},O=function(e){var t=Object(l.f)(),n=e.meetup,a=n.image,o=n.title,i=n.description,f=n.address,v=n.id,j=n.date,O=n.attendeesId,I=Object(u.c)(function(e){return e.meetup.meetupURL}),h=Object(u.c)(function(e){return e.favorite.favorites}),F=Object(u.b)(),k=Object(E.a)().callAPI,w=Object(c.useState)(!1),M=Object(s.a)(w,2),N=M[0],L=M[1];!function(e){h.some(function(t){return t===e})&&(F(d.b.isFavorite(e)),L(!0))}(v);return r.a.createElement("li",{className:p.a.item},r.a.createElement(b.a,null,r.a.createElement("div",{className:p.a.image},r.a.createElement("img",{src:a,alt:""})),r.a.createElement("div",{className:p.a.content},r.a.createElement("h3",null,o),r.a.createElement("p",null,j),r.a.createElement("address",null,f),r.a.createElement("p",null,i)),r.a.createElement("div",{className:p.a.actions},r.a.createElement("button",{onClick:function(){N||"/favorites"===t.pathname?(F(d.b.removeFromFavorites(v)),L(!1)):(F(d.b.addToFavorite({id:v,title:o,description:i,image:a,address:f,date:j,attendeesId:O})),L(!0))}},N||"/favorites"===t.pathname?"Remove from favorites":"To Favorites"),"/"===t.pathname?r.a.createElement("button",{onClick:function(){k("".concat(I,"/").concat(v,".json"),"DELETE").then(function(){k("".concat(I,".json")).then(function(e){F(m.b.formatData(e))}),F(m.b.toggleDeletePopUp())})}},"Delete Meetup"):""),r.a.createElement(_.a,null,r.a.createElement(g,{attendeesId:e.meetup.attendeesId,meetupId:e.meetup.id}))))};t.a=function(e){var t=Object(u.c)(function(e){return e.meetup.meetups}),n=e.meetups?Object(a.a)(e.meetups):Object(a.a)(t);return r.a.createElement("ul",{className:i.a.list},n.map(function(e){return r.a.createElement(O,{key:e.id,meetup:e})}))}},69:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(2),u=n(66);t.default=function(){var e,t=Object(r.c)(function(e){return e.favorite.favorites});return e=0===Object(r.c)(function(e){return e.favorite.totalFavorites})?c.a.createElement("p",null,"You got no favorites yet. Start adding some?"):c.a.createElement(u.a,{meetups:t}),c.a.createElement("section",null,c.a.createElement("h1",null,"My Favorites"),e)}}}]);
//# sourceMappingURL=4.0ce48103.chunk.js.map