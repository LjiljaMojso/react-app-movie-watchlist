(this["webpackJsonpreact-project"]=this["webpackJsonpreact-project"]||[]).push([[0],{62:function(e,t,a){},63:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var c=a(1),i=a(33),s=a.n(i),n=a(22),o=a(10),r=a(11),h=a(14),l=a(13),d=a(8),j=a.n(d),u=a(16),A=a.n(u),b=function e(){Object(o.a)(this,e)};b.moviesToWatch="https://towatchmovies.firebaseio.com/movies.json",b.watchedMovies="https://towatchmovies.firebaseio.com/watchedMovies.json",b.searchByTitle="http://www.omdbapi.com/?apikey=649e3e66&t=",b.delete=function(e){return fetch("https://towatchmovies.firebaseio.com/movies/".concat(e,".json"),{method:"DELETE"})},b.deleteWatched=function(e){return fetch("https://towatchmovies.firebaseio.com/watchedMovies/".concat(e,".json"),{method:"DELETE"})},b.movieDetails=function(e){return"http://www.omdbapi.com/?apikey=649e3e66&i=".concat(e,"&plot=full")};a(62);var v=a(12),f=a(3),m=a(34),p=a.n(m),x=a.p+"static/media/loader.25d6d7d6.gif",O=a(17),g=(a(63),a(0)),w=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(e){var c;return Object(o.a)(this,a),(c=t.call(this,e)).state={searchTerm:"",results:{},loading:!1},c.fetchSearchResults=function(e){var t="http://www.omdbapi.com/?apikey=649e3e66&s=".concat(e);c.cancel&&c.cancel.cancel(),c.cancel=j.a.CancelToken.source(),j.a.get(t,{cancelToken:c.cancel.token}).then((function(e){e.data.Search.length;c.setState({results:e.data.Search,loading:!1})})).catch((function(e){(j.a.isCancel(e)||e)&&c.setState({loading:!1})}))},c.handleInputChange=function(e){var t=e.target.value.toLowerCase();t?c.setState({searchTerm:t,loading:!0},(function(){c.fetchSearchResults(t)})):c.setState({searchTerm:t,results:{}})},c.renderSearchResults=function(){var e=c.state,t=e.results,a=e.loading,i=(e.message,c.props),s=i.getMovieByTitle,n=i.showList,o=i.showSearchList;if(Object.keys(t).length&&t.length&&n)return Object(g.jsx)(A.a,{top:!0,cascade:!0,children:Object(g.jsx)("ul",{id:"searchList",onClick:function(){o()},children:a?Object(g.jsx)("img",{src:x,className:"loader",alt:"loader-gif"}):t.map((function(e){return Object(g.jsxs)("li",{className:"foundMovie",children:[Object(g.jsxs)("span",{children:[" ",e.Title," "]})," ",Object(g.jsxs)(O.a,{id:"add",place:"top",effect:"solid",type:"info",backgroundColor:"rgb(148, 31, 227);",children:[" ",Object(g.jsx)("span",{children:" Add to List "})," "]}),Object(g.jsx)("img",{"data-tip":!0,"data-for":"add",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAHsSURBVEiJ7ZW9a1NhFMZ/596b5qPpZINg07GCUnH2AzoKgjR+EEE7iSg2s5OQIYt/QbBLK2gtsVRjEXQX4q44iTjYZCgZbdPb1Pseh9Q0ueY1qVn7bO9zznue55z3ci4coQ9kkKTF8fUxPxZccIQTLcapGb9ZydWzW0MJLKTXpox6BUSvAtHQVV/QssHJ56qz3w4tUJx8c1NUnwLxPiZ3VeVerpZ5NrDAk4lyVoVSOD56fASA7c1m+IqCzM1XMyt9BRbSa1MG7zNoLBy7vDQNwLs7X3r52sEx0/M/rn/vJJ1wllGv0Ks4QCThEkm4vUIAcTVuIUx2CRRTq0mEjK1CPwh6Y3F8fcwqQNS7aHM/IKJ+3JzrJLxuB04aFIBEaoSZxyfxYgcjOXYqCcCV5bNt7pcf8OHR14OHVyatHSiqQ7hvmRQx1g4ckaruazTqTd7f7f5aZkst52/nPlkFHDHVrnPnwfjNCoh/eN9t7PzcHf1oFcjVs1uClocQePVw89K2VQDA4ORtXew1AvYaga14I3DdfJjsvSrSr28r8jwc/9eqENFbDzaulQYSgPayWwIStpz9Er4q923L7q8R/UFuI/MSx5wBVnqPTHxFXgSuc9pWHAb84RRTq0likfOCTAAoWms0E5Xwgx7hv/Ab/TWodmbeOGoAAAAASUVORK5CYII=",alt:"add",onClick:function(){return s(e.Title)}})]},p()())}))})})},c.cancel="",c}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state,t=e.searchTerm,a=(e.loading,this.props),c=a.showSearchList,i=a.showSearch,s=a.search;return Object(g.jsx)("header",{children:Object(g.jsx)("div",{className:"main-wrapper",children:Object(g.jsxs)("div",{id:"header",children:[Object(g.jsx)("div",{className:"half",children:Object(g.jsx)(v.b,{to:"/",children:Object(g.jsx)("h3",{id:"logo",onClick:function(){i()},children:"My Movie Watchlist"})})}),Object(g.jsx)("div",{className:"half",children:Object(g.jsxs)("div",{id:"input-div",children:[s&&Object(g.jsx)(A.a,{children:Object(g.jsx)("input",{onClick:function(){c()},type:"text",value:t,placeholder:"Search movie",onChange:this.handleInputChange})}),this.renderSearchResults()]})})]})})})}}]),a}(c.Component);a(68);function S(e){var t=e.toWatchData,a=e.deleteMovie,c=e.moveToWatched,i=e.showMovieDetails,s=e.hideSearchList,n=e.onClickedGenre,o=e.header;return Object(g.jsx)("div",{id:"toWatchList",onClick:function(){s()},children:Object(g.jsxs)("div",{className:"main-wrapper",children:[Object(g.jsx)("div",{className:"title-selector",children:Object(g.jsx)("h1",{children:o})}),t.map((function(e){var t=e.data.Genre.split(", ");return Object(g.jsxs)("div",{className:"toWatchMovie",children:[Object(g.jsxs)("div",{className:"content",children:[Object(g.jsx)("span",{className:"rating",children:e.data.imdbRating}),Object(g.jsxs)("div",{className:"movieInfo",children:[Object(g.jsx)(v.b,{to:"/".concat(e.data.imdbID),children:Object(g.jsxs)("h2",{onClick:function(){return i(e.data.imdbID)},children:[e.data.Title," "]})}),Object(g.jsx)("p",{children:t.map((function(e){return Object(g.jsxs)("span",{className:"genre",onClick:function(){n(e)},children:[e,"\xa0"]},e)}))})]})]}),Object(g.jsxs)("div",{className:"icons",children:["To Watch"==o&&Object(g.jsx)("img",{"data-tip":!0,"data-for":"watched",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAIaSURBVEiJtdXBSxVRFMfxz1MpeDx9blSoEFq5EBOkFoF78V/pLwgNilxEki1aiYQLdyUulNq1S0taFNHGNoJZi9wkZBkkTYs5oxeb4RW8Bgbm/ubc+d5z7zm/gTGsoZFlmXbfsIoM6+j+H4AGngdko92QgpJCXqCnZCU9uIwRdP4ToATyMj44gBnshl7c3yPbexj4K0AJZBs/4vknXuMxVrCFo3i3j2voaAkogWS4i3PxbhTjqKMfsziIuFcYbpXBxRLIOuYiowJ6hEX0og/PQt/DUNUZjES6tysy2cMjLOFTaDsB6cKD0D5g8HQVXcDHCLhZsV2baCb6SuiLSfx0aO/RX/RBE+/ixcMk+EwJZBcLsaBGZHKEejJvPmLfxLcth/AUXUngBO5UbNdC6EsxHk/mdeJJ6MsdTq5icnF9w/VarTaVZdkBJuPAYbJWqzVxNsZfk3m/5GV9fDUjnQzzyUrqkf4hzlecyR62T1XiTHIOvYXYH0KG6SR4Mdm+MkiGuST+hpPmGzpdpoPyEsvkJdclL8Gd0A4xVdEn3bgf4y+4WtVoQ5F2Jm+evoAsOrGGsoMv5nzGaCurGJa3fSa3gdnYwrrcJiaUl3CGKy29KCZ2yA1s34k1bMmbaxlvcavi4HtaAhLQgNySN+QWndr1ZrFif1p9918BTsE65X51SdKQFbZy/Gds26+xoroabQWUQNbaDkggqxj7DU+bvPVus8evAAAAAElFTkSuQmCC",alt:"",onClick:function(){return c(e)}}),Object(g.jsx)(O.a,{id:"watched",place:"top",effect:"solid",type:"info",backgroundColor:"rgb(148, 31, 227)",children:Object(g.jsx)("span",{children:" Watched Movie "})}),Object(g.jsx)(O.a,{id:"delete",place:"top",effect:"solid",type:"error",backgroundColor:"rgb(148, 31, 227)",children:Object(g.jsx)("span",{children:" Delete Movie "})}),Object(g.jsx)("img",{"data-tip":!0,"data-for":"delete",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAsQAAALEBxi1JjQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFXSURBVEiJ1dS9LkRBGAbgx09CZFciS7+toFapuAIFBY1E5wZcAQoXoJDQSxSi0BAiGiKC+LsIUVhBsaEwJ8Zx2LNWwZtMZub7ed9vvskMtVHCJp7xEsZzsJVqJbfkEFjAOJawiwOcBlsHtnJwfIsd7GfY94MvNwZw6b0NPx0X6E9ImyKBNQxhtZ6qMjCFPYxBa+ToxhVmGxQYRE+yaU05uzDSoEAX7rIcGxrvfzI2EtL4DkpYxjBGf1j9OrYxjdusgHk8Rvs2lFNFxI+rHGISPGEuJmxOCTyg3fvdzOAs8q+EkeAsxAg5bYHjS4FKmAth7kQx8hcz9p3ROubIJVAPkpxvBe5/QeA+Nn51gqL68Tda9P8F/t8lp3/TirfPKqnmxseXfJmKP8d1WBdC7oMaqGCxZr2fsShVPZ9PACeY8NbLp5zk7ZjEcZ7gPhyhKv//X8UhetNkryICdZ44OKPXAAAAAElFTkSuQmCC",alt:"",onClick:function(){return a(e.id)}})]})]},e.id)}))]})})}a(69);var D=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.movieDetails;return Object(g.jsx)("div",{className:"main-wrapper",children:Object(g.jsxs)("div",{id:"movie-details",children:[Object(g.jsx)("div",{className:"poster",children:Object(g.jsx)("img",{src:e.Poster,alt:"movie-poster"})}),Object(g.jsxs)("div",{className:"details",children:[Object(g.jsx)("span",{className:"rating-big",children:e.imdbRating}),Object(g.jsxs)("h1",{children:["Title: \xa0 ",Object(g.jsx)("span",{children:e.Title})," "]}),Object(g.jsxs)("h3",{children:["Runtime: \xa0",Object(g.jsx)("span",{children:e.Runtime})]}),Object(g.jsxs)("h3",{className:"actors",children:["Genre:\xa0",Object(g.jsx)("div",{children:Object(g.jsx)("span",{children:e.Genre})})]}),Object(g.jsxs)("h3",{children:["Director:\xa0 ",Object(g.jsx)("span",{children:e.Director})]}),Object(g.jsxs)("h3",{className:"actors",children:["Actors:\xa0\xa0",Object(g.jsx)("div",{children:Object(g.jsx)("span",{children:e.Actors})})]}),Object(g.jsxs)("h3",{children:["Plot:",Object(g.jsx)("div",{className:"plot",children:Object(g.jsx)("span",{children:e.Plot})})]})]})]})})}}]),a}(c.Component),C=(a(70),function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,i=new Array(c),s=0;s<c;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={filter:""},e.handleFilter=function(t){e.setState({filter:t.target.value},(function(){var t=e.props,a=t.toWatchData,c=(t.fetchData,a.filter((function(t){return t.data.Genre.toLowerCase().includes(e.state.filter.toLowerCase())})));e.setState({toWatchData:c},(function(){e.props.onFilter(e.state.toWatchData)}))}))},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.hideSearchList;return Object(g.jsx)(c.Fragment,{children:Object(g.jsx)("div",{className:"main-wrapper",children:Object(g.jsxs)("div",{className:"filter",onClick:function(){e()},children:[Object(g.jsxs)("select",{onChange:this.handleFilter,value:this.state.value,children:[Object(g.jsx)("option",{value:"",children:"Select Genre"}),Object(g.jsx)("option",{value:"Drama",children:"Drama"}),Object(g.jsx)("option",{value:"Horror",children:"Horror"}),Object(g.jsx)("option",{value:"Sci-Fi",children:"Sci-Fi"}),Object(g.jsx)("option",{value:"Crime",children:"Crime"}),Object(g.jsx)("option",{value:"Comedy",children:"Comedy"}),Object(g.jsx)("option",{value:"Action",children:"Action"}),Object(g.jsx)("option",{value:"Thriller",children:"Thriller"}),Object(g.jsx)("option",{value:"Adventure",children:"Adventure"}),Object(g.jsx)("option",{value:"Biography",children:"Biography"})]}),Object(g.jsx)("button",{onClick:this.props.resetFilter,children:"Reset Filter"})]})})})}}]),a}(c.Component)),k=function(e){Object(h.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var c=arguments.length,i=new Array(c),s=0;s<c;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={movieTitle:"",movieData:{},toWatchData:[],filteredData:[],watchedData:[],movieDetails:{},showDetails:!1,urlId:"",showList:!1,search:!0},e.showSearchList=function(){e.setState({showList:!0})},e.hideSearchList=function(){e.setState({showList:!1})},e.getMovieByTitle=function(t){e.setState({movieTitle:t},(function(){j.a.get("".concat(b.searchByTitle).concat(e.state.movieTitle)).then((function(t){e.setState({movieData:t},(function(){j.a.post(b.moviesToWatch,e.state.movieData).then((function(){e.fetchData()}))}))}))}))},e.deleteMovie=function(t){b.delete(t).then((function(){return e.fetchData()}))},e.deleteWatchedMovie=function(t){b.deleteWatched(t).then((function(){return e.fetchWatchedData()}))},e.moveToWatched=function(t){e.deleteMovie(t.id),j.a.post(b.watchedMovies,t).then((function(){return j.a.get(b.watchedMovies).then((function(t){e.setState({watchedData:e.formatData(t)})}))}))},e.showMovieDetails=function(t){j.a.get(b.movieDetails(t)).then((function(t){return e.setState({movieDetails:t.data,showDetails:!0,urlId:t.data.imdbID,search:!1})}))},e.onFilter=function(t){e.setState({filteredData:t})},e.resetFilter=function(){e.setState({filteredData:e.state.toWatchData})},e.showSearch=function(){e.setState({search:!0})},e.onClickedGenre=function(t){var a=e.state.toWatchData.filter((function(e){return e.data.Genre.toLowerCase().includes(t.toLowerCase())}));e.setState({filteredData:a})},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.fetchData(),this.fetchWatchedData();var e=window.location.pathname.slice(1);"/"!==window.location.pathname&&this.showMovieDetails(e)}},{key:"fetchData",value:function(){var e=this;j.a.get(b.moviesToWatch).then((function(t){e.setState({toWatchData:e.formatData(t),filteredData:e.formatData(t)})}))}},{key:"fetchWatchedData",value:function(){var e=this;j.a.get(b.watchedMovies).then((function(t){e.setState({watchedData:e.formatData(t)})}))}},{key:"formatData",value:function(e){var t=[];for(var a in e.data)t.push(Object(n.a)(Object(n.a)({},e.data[a]),{},{id:a}));return t}},{key:"render",value:function(){var e=this.state,t=e.toWatchData,a=e.watchedData,c=e.showDetails,i=e.movieDetails,s=e.urlId,n=e.showList,o=(e.search,e.filteredData);return Object(g.jsxs)(v.a,{children:[Object(g.jsx)(w,{search:this.state.search,showSearch:this.showSearch,showSearchList:this.showSearchList,showList:n,getMovieByTitle:this.getMovieByTitle}),Object(g.jsx)(f.a,{exact:!0,path:"/",children:Object(g.jsxs)(A.a,{children:[Object(g.jsx)(C,{toWatchData:t,fetchData:this.fetchData,onFilter:this.onFilter,resetFilter:this.resetFilter,hideSearchList:this.hideSearchList}),Object(g.jsx)(S,{onClickedGenre:this.onClickedGenre,hideSearchList:this.hideSearchList,toWatchData:o,deleteMovie:this.deleteMovie,moveToWatched:this.moveToWatched,showMovieDetails:this.showMovieDetails,header:"To Watch"}),Object(g.jsx)(S,{hideSearchList:this.hideSearchList,toWatchData:a,deleteMovie:this.deleteWatchedMovie,showMovieDetails:this.showMovieDetails,header:"Watched"})]})}),Object(g.jsx)(f.a,{path:"/".concat(s),children:c&&Object(g.jsx)(D,{movieDetails:i})})]})}}]),a}(c.Component);s.a.render(Object(g.jsx)(v.a,{children:Object(g.jsx)(k,{color:"light"})}),document.getElementById("root"))}},[[71,1,2]]]);
//# sourceMappingURL=main.8c8c79b0.chunk.js.map