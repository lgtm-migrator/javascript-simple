(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./src/common/header/components/assets/logo.png":function(e,n){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAACoUlEQVRoQ+2Zv4vUQBTHvy8q3iLKJljYiMia4K9DRUVREQv/gANLrf2RbGUhNoKFrQpCdk8srjhrQQs7CxEFPX+A3KFsjrvCSg+SWwtPzt15soKwntnLbDITN7jTzpv3vp/3ZjKPDKHggwquHwMFUPYb+2FQuTupos1LX6vOy16JHigA0288JaKT3WIZPBe5TmUIkMdZKXYFbn0qmeu/fyDCNmVbyKoFMwB255H9XjEynYEhgILSMfAicu3jqb5Cg1ABgG+ErnOtkADM/Dhaa4/hAv1IB+A3Jphou4Kd0JcLYiwIwuSiaz9KWjhQN3GS2Lj5IUCarKlc8/9UYOPd+Z1rRGuLyuzJ+MrcTpfH5/YZ7dY9EB2WCajaJlMr0RFPojVFoHWqhcn6ywRg1oJJAs7JBtNhlwnAqgWvARzUIUzWZyYA0w+mibBHNpgOOy0ADBon5s86BK/0KQwOFy85d1L1QnEVYGA6cu3RPMTLxFj1IovfQvwqdJ0jMs7zsBkC5JHl1WIoqUC5HpxSCfKrfVguvcflrUtJfrMDMJNVnxVJgfqdZ/AyMV0NPfu23gpoAvgtui2M081q5Ymyzyiw4iukGYAZDyPPHissAIAgdG2nsAAaWom/LzLLD673e0h72F8BodQ9lwuAIvEw/cYzIjpRZAC1Dxx590LK3wdiu1HGTOTZe1Vtm24/lh9MgXBI8xYCGKgT44tKCCZsBuAS/nx41HCIVcpO9pUNoBa8JeBAchiNFswfQ8/ZlfYiu0+EsxrlJbtmfhB6zplUAJY/ewzEz5Oj6LFg5pYg42jT3fEmFUBnkekHLhFuAhjRIzPeKwPvhGGcb16sdH7t9BxyP3cn5kc2fROjhiE25AFhtLEQVu3OC2nikANIdPPvDAoP8BNA9oBAU9GXiQAAAABJRU5ErkJggg=="},"./src/common/header/components/index.less":function(e,n,t){},"./src/common/header/index.ts":function(e,n,t){"use strict";t.r(n);var r=t("./node_modules/tslib/tslib.es6.js"),s=t("./node_modules/react/index.js"),o=t.n(s),c=t("./node_modules/react-redux/es/index.js"),i=(t("./src/common/header/components/index.less"),function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return r.b(n,e),n.prototype.render=function(){var e=this;return o.a.createElement("header",{className:"header-container"},o.a.createElement("img",{src:t("./src/common/header/components/assets/logo.png")}),o.a.createElement("nav",null,o.a.createElement("a",{onClick:function(){return e.props.dispatch(p.pushHistoryByNav("/notes"))}},"笔记"),o.a.createElement("a",{onClick:function(){return e.props.dispatch(p.pushHistoryByNav("/demo"))}},"示例")))},n}(o.a.PureComponent)),a=Object(c.c)(function(e){return{name:e.app.main.name}})(i),u=t("./src/framework/index.ts");t.d(n,"actions",function(){return p}),t.d(n,"Main",function(){return a});var A=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return r.b(n,e),n.prototype.onInitialized=function(){return r.c(this,function(e){switch(e.label){case 0:return[5,r.f(this.setState({}))];case 1:return e.sent(),[2]}})},n.prototype.pushHistoryByNav=function(n){return r.c(this,function(e){switch(e.label){case 0:return[5,r.f(this.setHistory(n))];case 1:return e.sent(),[2]}})},n.prototype.test=function(){return r.c(this,function(e){switch(e.label){case 0:return[5,r.f(this.setState({name:"voco"}))];case 1:return e.sent(),[2]}})},n}(u.a),p=Object(u.b)(new A("header",{name:"string"}))}}]);
//# sourceMappingURL=header.336c6e97.js.map