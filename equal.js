function equalHeight(adA,adAs,adB,adBs){
var lenA = $(adA).height();
lenA -= adAs;
var lenB = $(adB).height();
lenB -= adBs;
if(lenA>lenB){
$(adB).css("height",lenA);}
else {
$(adA).css("height",lenB);}
}


