"use strict";(self.webpackChunksocial_network_react=self.webpackChunksocial_network_react||[]).push([[460],{460:function(t,s,e){e.r(s),e.d(s,{default:function(){return O}});var o=e(1413),i=e(5671),n=e(3144),r=e(136),a=e(8347),u=e(2791),d={mainPhoto:"profileInfo_mainPhoto__7m-36"},l=e(1478),p=e(7326),c=e(184),h=function(t){(0,r.Z)(e,t);var s=(0,a.Z)(e);function e(){var t;(0,i.Z)(this,e);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=s.call.apply(s,[this].concat(n))).state={editMode:!1,status:t.props.status},t.activateEditMode=function(){console.log("this",(0,p.Z)(t)),t.setState({editMode:!0})},t.deactivateEditMode=function(){t.setState({editMode:!1}),t.props.updateStatus(t.state.status)},t.onStatusChange=function(s){t.setState({status:s.currentTarget.value})},t}return(0,n.Z)(e,[{key:"componentDidUpdate",value:function(t,s,e){t.status!==this.props.status&&this.setState({status:this.props.status})}},{key:"render",value:function(){return(0,c.jsxs)("div",{style:{display:"flex"},children:["status:",!this.state.editMode&&(0,c.jsx)("div",{children:(0,c.jsx)("span",{onDoubleClick:this.activateEditMode,children:this.props.status||"no status"})}),this.state.editMode&&(0,c.jsx)("div",{children:(0,c.jsx)("input",{onChange:this.onStatusChange,autoFocus:!0,onBlur:this.deactivateEditMode,value:this.state.status||""})})]})}}]),e}(u.Component),D=e(4808),B=u.memo((function(t){if(!t.profile)return(0,c.jsx)(l.p,{});console.log(t.isOwner);return(0,c.jsxs)("div",{children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("img",{src:"https://www.designmantic.com/blog/wp-content/uploads/2013/09/Logo-Unique-718x300.jpg"}),(0,c.jsx)(h,{status:t.status,updateStatus:t.updateStatus})]}),(0,c.jsxs)("div",{className:d.descriptionBlock,children:[(0,c.jsx)("p",{children:t.profile.aboutMe}),(0,c.jsx)("p",{children:t.profile.userId}),(0,c.jsx)("img",{src:t.profile.photos.large||D,alt:t.profile.photos.large,className:d.mainPhoto}),t.isOwner&&(0,c.jsx)("input",{type:"file",onChange:function(s){var e;null!==(e=s.target.files)&&void 0!==e&&e.length&&t.savePhoto(s.target.files[0])}})]})]})})),f=e(81),m="myPost_postsBlock__dHh7S",v="myPost_posts__GuGAe",j=e(885),x=function(t){var s=(0,u.useState)(!0),e=(0,j.Z)(s,2);e[0],e[1];return(0,c.jsxs)("div",{children:[(0,c.jsx)("img",{width:"20px",src:"https://media.istockphoto.com/id/1300845620/ru/%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%BD%D0%B0%D1%8F/%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-icon-flat-%D0%B8%D0%B7%D0%BE%D0%BB%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD-%D0%BD%D0%B0-%D0%B1%D0%B5%D0%BB%D0%BE%D0%BC-%D1%84%D0%BE%D0%BD%D0%B5-%D1%81%D0%B8%D0%BC%D0%B2%D0%BE%D0%BB-%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F-%D0%B8%D0%BB%D0%BB%D1%8E%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0.jpg?s=612x612&w=0&k=20&c=Po5TTi0yw6lM7qz6yay5vUbUBy3kAEWrpQmDaUMWnek="}),t.message,(0,c.jsxs)("div",{children:[(0,c.jsx)("span",{children:"like"})," ",t.likesCount]})]})},g=e(5705),P=e(3079),y=e(3832),w=u.memo((function(t){return(0,c.jsxs)("div",{className:m,children:[(0,c.jsx)("h3",{children:"My posts"}),(0,c.jsx)(k,{addPost:t.addPost}),(0,c.jsx)("div",{className:v,children:t.posts.map((function(t){return(0,c.jsx)(x,{message:t.message,likesCount:t.likesCount},t.id)}))})]})})),k=function(t){var s=(0,g.TA)({initialValues:{newPostBody:""},validate:function(t){var s={};return(0,P.R)(t.newPostBody)&&(s.newPostBody=(0,P.R)(t.newPostBody)),(0,P.O)(30)(t.newPostBody)&&(s.newPostBody=(0,P.O)(30)(t.newPostBody)),s},onSubmit:function(e){t.addPost(e.newPostBody),s.resetForm()}});return(0,c.jsx)("form",{onSubmit:s.handleSubmit,children:(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{children:(0,c.jsx)(y.g,{placeholder:"Enter your message",name:"newPostBody",value:s.values.newPostBody,onChange:s.handleChange,touched:s.touched.newPostBody,errors:s.errors.newPostBody})}),(0,c.jsx)("div",{children:(0,c.jsx)("button",{type:"submit",children:"Add post"})})]})})},S=e(364),E=(0,S.$j)((function(t){return{posts:t.profilePage.posts}}),(function(t){return{addPost:function(s){s&&t((0,f.Wl)(s))}}}))(w),C=e(1523),M=function(t){return(0,c.jsxs)("div",{children:[(0,c.jsx)(B,{isOwner:t.isOwner,profile:t.profile,status:t.status,updateStatus:t.updateStatus,savePhoto:t.savePhoto}),(0,c.jsx)(C.OL,{to:"/profile/".concat(30953),children:"'asdfasdf'"}),(0,c.jsx)(E,{})]})},_=e(9271),b=e(2932),I=e(7781),Z={getProfile:f.Ai,getStatus:f.lR,updateStatus:f.Nf,savePhoto:f.Ju},A=function(t){(0,r.Z)(e,t);var s=(0,a.Z)(e);function e(t){return(0,i.Z)(this,e),s.call(this,t)}return(0,n.Z)(e,[{key:"refreshProfile",value:function(){var t=this.props.match.params.userId;t?t=Number(t):(t=this.props.authorizedUserId)||this.props.history.push("/login"),console.log("userId",t),t&&this.props.getProfile(t),t&&this.props.getStatus(t)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,s,e){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return console.log("render PROFILE"),(0,c.jsx)("div",{children:(0,c.jsx)(M,(0,o.Z)((0,o.Z)({},this.props),{},{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto}))})}}]),e}(u.Component),O=(0,I.qC)((0,S.$j)((function(t){return console.log("mapStateToProps PROFILE"),{profile:t.profilePage.profile,status:t.profilePage.status,authorizedUserId:t.auth.userId,isAuth:t.auth.isAuth}}),Z),_.EN,b.D)(A)}}]);
//# sourceMappingURL=460.bba02d7e.chunk.js.map