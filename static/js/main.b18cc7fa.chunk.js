(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e){e.exports=[{id:1,name:"Daniel",image:"https://www.twincities.com/wp-content/uploads/2015/11/20140212__140213ae-Daniel_1.jpg"},{id:2,name:"Prince Wednesday",image:"https://vignette.wikia.nocookie.net/danieltigerneighborhood/images/b/b7/Prince_Wednesday.JPEG/revision/latest?cb=20120907223130"},{id:3,name:"Baby Margaret",image:"https://vignette.wikia.nocookie.net/danieltigerneighborhood/images/5/5f/BabyMargaret.jpg/revision/latest?cb=20150928213135"},{id:4,name:"Miss Elaina",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaVvONeChSIWeNToWYq994Yfck0z8i-0HA9kh8zWgrDNmUUdIbNw"},{id:5,name:"Katerina Kittycat",image:"https://i.pinimg.com/originals/02/1e/cc/021ecc019f427c318518cb83e89009c6.jpg"},{id:6,name:"O the Owl",image:"https://vignette.wikia.nocookie.net/danieltigerneighborhood/images/d/d4/Xando.jpg/revision/latest/scale-to-width-down/250?cb=20120908141117"},{id:7,name:"Mom Tiger",image:"https://vignette.wikia.nocookie.net/danieltigerneighborhood/images/d/de/Momtiger.jpg/revision/latest/scale-to-width-down/250?cb=20120908144141"},{id:8,name:"Dad Tiger",image:"https://vignette.wikia.nocookie.net/danieltigerneighborhood/images/7/77/Dadtiger.jpg/revision/latest/scale-to-width-down/250?cb=20120908144829"},{id:9,name:"Jodi Platypus",image:"https://static.tvtropes.org/pmwiki/pub/images/daniel_tiger_jodi.jpg"},{id:10,name:"Teacher Harriet",image:"https://vignette.wikia.nocookie.net/danieltigerneighborhood/images/f/f7/Teacher_harriet_hair_bun.PNG/revision/latest?cb=20180619062049"},{id:11,name:"Doctor Anna",image:"https://vignette.wikia.nocookie.net/danieltigerneighborhood/images/5/55/Doctor_anna.png/revision/latest/scale-to-width-down/300?cb=20120921202834"},{id:12,name:"Trolley",image:"https://pbs.twimg.com/profile_images/378800000572968973/332e1ddd7025071d491c8d04fb632ad1_400x400.jpeg"}]},,,function(e,t,a){e.exports=a(21)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(8),o=a.n(r),c=a(1),s=a(2),l=a(4),m=a(3),d=a(5),g=(a(15),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("a",{href:" ",className:"custom-card",onClick:function(t){e.props.handleClick(t,e.props.id)}},i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:this.props.name,src:this.props.image}))))}}]),t}(i.a.Component));a(16);var p=function(e){return i.a.createElement("div",{className:"wrapper"},e.children)};a(17);var u=function(e){return i.a.createElement("div",{className:"container"},i.a.createElement("span",{className:"title"},e.title),i.a.createElement("span",{className:"correct"},e.correct),i.a.createElement("span",{className:"topScore"},"Top score:",e.topScore),i.a.createElement("span",{className:"score"},"Your score:",e.score))};a(18);var h=function(e){return i.a.createElement("div",{className:"jumbotron"},i.a.createElement("h1",null," Clicky Game!"),i.a.createElement("p",null,"Click on an image to earn points, but don't click on any more than once!"))};a(19);var f=function(e){return i.a.createElement("div",{className:"cardContainer"},e.children)},b=a(6),v=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={friends:b,count:0,topScore:0,arr:[],correct:"Click an image to begin",style:""},a.handleClick=function(e,t){e.preventDefault(),a.state.arr.includes(t)?a.setState({count:0,arr:[],friends:b,correct:"Oops!! Play again"}):(a.state.arr.push(t),a.setState({count:a.state.count+1}),a.setState({correct:"Yay!! You guessed a new friend"}),a.state.count>=a.state.topScore&&a.setState({topScore:a.state.count+1}),a.shuffle(a.state.friends))},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"shuffle",value:function(e){var t,a,n;for(t=e.length-1;t>0;t--)a=Math.floor(Math.random()*(t+1)),n=e[t],e[t]=e[a],e[a]=n;return e}},{key:"render",value:function(){var e=this;return i.a.createElement(p,null,i.a.createElement(u,{title:"Clicky Game!!",score:this.state.count,correct:this.state.correct,topScore:this.state.topScore}),i.a.createElement(h,null),i.a.createElement(f,null,this.state.friends.map(function(t){return i.a.createElement(g,{card:e.state.style,id:t.id,key:t.id,name:t.name,image:t.image,handleClick:e.handleClick})})))}}]),t}(n.Component);a(20);o.a.render(i.a.createElement(v,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.b18cc7fa.chunk.js.map