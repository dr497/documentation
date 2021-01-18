(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{334:function(e,t,i){},372:function(e,t,i){"use strict";var o=i(334);i.n(o).a},389:function(e,t,i){"use strict";i.r(t);var o=i(384),a={field:'A field, or a key-value pair, is a set of two data items linked together: an <b>attribute</b> and its associated <b>value</b>. <br><br> Ex: <code>"attribute": "value"</code>',attribute:'An attribute is the name of a field, like a key. <br><br> Ex:  <code>"title": "Batman"</code> <br> In the example above, "title" is the attribute.',value:'A piece of data linked to an attribute. One half of a field. <br><br> Ex:  <code>"title": "Batman"</code> <br> In the example above, "Batman" is the value.',"ranking rules":"A set of consecutive rules applied to ensure relevancy in search results. <br><br> For example, to sort results by number of typos or number of matched query terms in each matching document.","primary field":"A special field containing the primary key and a unique document id. <br><br> Every document must possess a correctly formatted primary field in order to be indexed.","primary key":'An attribute that must be present in every document of a given index, used to identify and distinguish documents.<br><br> Example: In a document with the primary field <code>"id": "Abc_012"</code>, "id" is the index\'s primary key and "Abc_012" is the document\'s unique identifier.',"document id":'The value of the primary field. The document id acts as a unique identifier for storing documents. <br><br> Example: in a document with the primary field <code>"movie_id": "Abc_012"</code>, "Abc_012" is the document id.',schemaless:"This means data can be indexed without providing a fixed data structure. <br><br> For example, SQL's tables require schema definition whereas MongoDB's collections don't.",searchable:"The data is used to determine the relevancy of a document when doing a search query.",displayed:"The field is present in the documents returned upon search.",atomic:"An atomic transaction is an indivisible and irreducible series of database operations such that either all occur, or nothing occurs."},n={props:{word:{type:String,default:"field",validator:function(e){return a[e]}},label:{type:String,default:null}},data:function(){return{glossary:a,displayed:"",content:""}},created:function(){this.displayed=this.label||this.word,this.content=a[this.word]+"<div id='arrow' data-popper-arrow></div>"},mounted:function(){var e=this.$el.querySelector(".tooltip-text"),t=this.$el.querySelector(".tooltip-content");Object(o.a)(e,t,{placement:"top",modifiers:[{name:"offset",options:{offset:[0,8]}}]}),this.hideTooltip()},methods:{showTooltip:function(){this.$el.querySelector(".tooltip-content").classList.remove("tooltip-hide")},hideTooltip:function(){this.$el.querySelector(".tooltip-content").classList.add("tooltip-hide")}}},r=(i(372),i(8)),s=Object(r.a)(n,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("span",[i("span",{staticClass:"tooltip-text",on:{mouseover:e.showTooltip,mouseleave:e.hideTooltip}},[e._v("\n    "+e._s(e.displayed)+"\n  ")]),e._v(" "),i("div",{staticClass:"tooltip-content",domProps:{innerHTML:e._s(e.content)}})])}),[],!1,null,null,null);t.default=s.exports}}]);