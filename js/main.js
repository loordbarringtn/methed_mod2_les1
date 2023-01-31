const meetWithJavascriptSection = document.querySelector('.item_one');
const scopeAndClosureSection = document.querySelector('.item_two');
const thisSection = document.querySelector('.item_three');
const itemsClass = document.querySelector('.items');

itemsClass.prepend(meetWithJavascriptSection, scopeAndClosureSection, thisSection);

const scopeAndClosureText = document.querySelectorAll('.props__item_two');
const typesAndGrammarConstructionsText = document.querySelectorAll('.props__item_four');
const typeConversionText = document.querySelector('.item_two .props__item_four');

typesAndGrammarConstructionsText[3].after(typeConversionText);
scopeAndClosureText[7].after(scopeAndClosureText[8]);
scopeAndClosureText[8].after(scopeAndClosureText[9]);

const propsItemsThree = document.querySelector('.item_three .props__list');
const propsItemsFive = document.querySelector('.item_five .props__list');
const propsItemsFiveCloned = propsItemsFive.cloneNode(true);

propsItemsThree.replaceWith(propsItemsFiveCloned);
propsItemsFive.replaceWith(propsItemsThree);

const scopeAndClosureHeader = document.querySelector('.item_five .item__title');
const esSixHeader = document.querySelector('.item_two .item__title');
const asyncOptHeader = document.querySelector('.item_six .item__title');
const closureAndObjectsHeader = document.querySelector('.item_three .item__title');

const esSixHeaderCloned = esSixHeader.cloneNode(true);
const scopeAndClosureHeaderCloned = scopeAndClosureHeader.cloneNode(true);
const asyncOptHeaderCloned = asyncOptHeader.cloneNode(true);

esSixHeader.replaceWith(scopeAndClosureHeaderCloned);
scopeAndClosureHeader.replaceWith(asyncOptHeaderCloned);
asyncOptHeader.replaceWith(esSixHeaderCloned);
closureAndObjectsHeader.textContent = 'This и прототипы объектов';

const ads = document.querySelector('.ads');
ads.remove();