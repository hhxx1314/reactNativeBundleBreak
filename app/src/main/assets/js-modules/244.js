__d(244,function(t,e,i,n){"use strict";function s(t,e,i){return t[e][i]}function a(t,e){return t[e]}function o(t){for(var e=0,i=0;i<t.length;i++){e+=t[i].length}return e}function r(t){if(d(t))return{};for(var e={},i=0;i<t.length;i++){var n=t[i];c(!e[n],"Value appears more than once in array: "+n),e[n]=!0}return e}var h=e(18),d=e(245),c=e(21),u=function(){function t(e){babelHelpers.classCallCheck(this,t),h(e&&"function"==typeof e.rowHasChanged,"Must provide a rowHasChanged function."),this._rowHasChanged=e.rowHasChanged,this._getRowData=e.getRowData||s,this._sectionHeaderHasChanged=e.sectionHeaderHasChanged,this._getSectionHeaderData=e.getSectionHeaderData||a,this._dataBlob=null,this._dirtyRows=[],this._dirtySections=[],this._cachedRowCount=0,this.rowIdentities=[],this.sectionIdentities=[]}return babelHelpers.createClass(t,[{key:"cloneWithRows",value:function(t,e){var i=e?[e]:null;return this._sectionHeaderHasChanged||(this._sectionHeaderHasChanged=function(){return!1}),this.cloneWithRowsAndSections({s1:t},["s1"],i)}},{key:"cloneWithRowsAndSections",value:function(e,i,n){h("function"==typeof this._sectionHeaderHasChanged,"Must provide a sectionHeaderHasChanged function with section data."),h(!i||!n||i.length===n.length,"row and section ids lengths must be the same");var s=new t({getRowData:this._getRowData,getSectionHeaderData:this._getSectionHeaderData,rowHasChanged:this._rowHasChanged,sectionHeaderHasChanged:this._sectionHeaderHasChanged});return s._dataBlob=e,s.sectionIdentities=i?i:Object.keys(e),n?s.rowIdentities=n:(s.rowIdentities=[],s.sectionIdentities.forEach(function(t){s.rowIdentities.push(Object.keys(e[t]))})),s._cachedRowCount=o(s.rowIdentities),s._calculateDirtyArrays(this._dataBlob,this.sectionIdentities,this.rowIdentities),s}},{key:"getRowCount",value:function(){return this._cachedRowCount}},{key:"getRowAndSectionCount",value:function(){return this._cachedRowCount+this.sectionIdentities.length}},{key:"rowShouldUpdate",value:function(t,e){var i=this._dirtyRows[t][e];return c(void 0!==i,"missing dirtyBit for section, row: "+t+", "+e),i}},{key:"getRowData",value:function(t,e){var i=this.sectionIdentities[t],n=this.rowIdentities[t][e];return c(void 0!==i&&void 0!==n,"rendering invalid section, row: "+t+", "+e),this._getRowData(this._dataBlob,i,n)}},{key:"getRowIDForFlatIndex",value:function(t){for(var e=t,i=0;i<this.sectionIdentities.length;i++){if(!(e>=this.rowIdentities[i].length))return this.rowIdentities[i][e];e-=this.rowIdentities[i].length}return null}},{key:"getSectionIDForFlatIndex",value:function(t){for(var e=t,i=0;i<this.sectionIdentities.length;i++){if(!(e>=this.rowIdentities[i].length))return this.sectionIdentities[i];e-=this.rowIdentities[i].length}return null}},{key:"getSectionLengths",value:function(){for(var t=[],e=0;e<this.sectionIdentities.length;e++)t.push(this.rowIdentities[e].length);return t}},{key:"sectionHeaderShouldUpdate",value:function(t){var e=this._dirtySections[t];return c(void 0!==e,"missing dirtyBit for section: "+t),e}},{key:"getSectionHeaderData",value:function(t){if(!this._getSectionHeaderData)return null;var e=this.sectionIdentities[t];return c(void 0!==e,"renderSection called on invalid section: "+t),this._getSectionHeaderData(this._dataBlob,e)}},{key:"_calculateDirtyArrays",value:function(t,e,i){for(var n=r(e),s={},a=0;a<i.length;a++){var o=e[a];c(!s[o],"SectionID appears more than once: "+o),s[o]=r(i[a])}this._dirtySections=[],this._dirtyRows=[];for(var h,d=0;d<this.sectionIdentities.length;d++){var o=this.sectionIdentities[d];h=!n[o];var u=this._sectionHeaderHasChanged;!h&&u&&(h=u(this._getSectionHeaderData(t,o),this._getSectionHeaderData(this._dataBlob,o))),this._dirtySections.push(!!h),this._dirtyRows[d]=[];for(var l=0;l<this.rowIdentities[d].length;l++){var g=this.rowIdentities[d][l];h=!n[o]||!s[o][g]||this._rowHasChanged(this._getRowData(t,o,g),this._getRowData(this._dataBlob,o,g)),this._dirtyRows[d].push(!!h)}}}}]),t}();i.exports=u});