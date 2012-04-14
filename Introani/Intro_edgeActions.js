/***********************
* Adobe Edge Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

//Edge symbol: 'stage'
(function(symbolName) {

Symbol.bindElementAction(compId, symbolName, "${_Stage}", "touchend", function(sym, e) {
// play the timeline from the given position (ms or label)
sym.play(0000);
});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3506, function(sym, e) {
// insert code here
});
//Edge binding end





})("stage");
//Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-211742");