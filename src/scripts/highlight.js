import { annotate } from 'rough-notation';
const elementsToHighlight = document.querySelectorAll('#annotate-highlight');
elementsToHighlight.forEach((e)=>{
  const annotation = annotate(e, { type: 'highlight' , color: e.dataset.color });
  setTimeout(() => {annotation.show();}, 1000);
})