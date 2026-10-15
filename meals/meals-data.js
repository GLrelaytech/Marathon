/* Meals data. Shared by meals/index.html and the life hub home page. */
/* ============ the fixed week ============
   Same every week. No decisions. Day type follows the training plan. */
const M_DN=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
const M_FULL=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
const M_TYPE=[
  ['Quality day: more carbs','var(--big)'],
  ['Normal day','var(--acc)'],
  ['Vert day: normal','var(--acc)'],
  ['Normal day','var(--acc)'],
  ['Long run: most carbs','var(--big)'],
  ['Rest day: fewer carbs','var(--rest)'],
  ['Light day','var(--acc)']
];
const SKYR={n:'Skyr bowl',d:'250 g skyr, 40 g granola, 100 g berries (thawed overnight), 1 tsp honey.'};
const SKYRBIG={n:'Skyr bowl, big',d:'250 g skyr, 40 g granola + 30 g oats, 100 g berries, 1 banana, 1 tsp honey.'};
const EGGS={n:'Eggs on rye',d:'3 scrambled eggs, 2 slices rye bread, ½ avocado, cucumber.'};
const NUTS={n:'Banana + nuts',d:'1 banana, 20 g walnuts or almonds.'};
const PUD={n:'Protein pudding',d:'1 protein pudding or protein yoghurt.'};
const APB={n:'Apple + peanut butter',d:'1 apple, 1 tbsp peanut butter.'};
const MW=[
 {b:SKYRBIG,s1:NUTS,s2:PUD,
  l:{n:'Optigrill chicken + rice',d:'200 g chicken breast, 100 g rice (dry weight), cucumber and lettuce, garlic yoghurt.',cook:'Grill 2 portions (6–7 min). The second is Tuesday\'s wraps.'}},
 {b:SKYR,s1:NUTS,s2:APB,
  l:{n:'Chicken wraps',d:'2 wholewheat tortillas, Monday\'s chicken, lettuce, cucumber, 30 g kashkaval, garlic yoghurt.',cook:'No cooking. Warm the wraps on the Optigrill for 1 min.'}},
 {b:SKYR,s1:NUTS,s2:PUD,
  l:{n:'Optigrill steak + potatoes',d:'200 g beef steak, 300 g baby potatoes (from Sunday), green salad.',cook:'Steak 4–6 min. Warm the potatoes.'}},
 {b:SKYR,s1:NUTS,s2:APB,
  l:{n:'Optigrill salmon + couscous',d:'200 g salmon, 75 g couscous, 150 g green beans (frozen, microwave).',cook:'Salmon 5–6 min. Couscous: boiling water, 5 min.'}},
 {b:SKYRBIG,s1:{n:'Before the run: 3 dates',d:'Or a rice cake with honey.'},s2:{n:'After the run: pudding + banana',d:'Protein pudding and 1 banana within 30 min.'},
  l:{n:'Pesto pasta + Optigrill chicken',d:'100 g pasta (dry weight), 2 tbsp pesto, 200 g chicken breast.',cook:'Grill 2 portions. The second is Saturday\'s quesadillas.'}},
 {b:EGGS,s1:NUTS,s2:APB,
  l:{n:'Optigrill quesadillas',d:'2 tortillas, Friday\'s chicken, 40 g kashkaval, sweetcorn, mushrooms.',cook:'3–4 min on the Optigrill.'}},
 {b:EGGS,s1:NUTS,s2:PUD,
  l:{n:'Optigrill pork + rice',d:'200 g pork tenderloin medallions, 75 g rice (dry weight), green beans.',cook:'Sunday prep day: see the Prep tab.'}}
];

/* ============ shopping: same basket every week ============ */
const EB=q=>'https://www.ebag.bg/search/?products%5Bquery%5D='+encodeURIComponent(q);
const WEEKLY=[
 ['Dairy and eggs',[
  ['skyr','Скир','Skyr','3 × 450 g'],
  ['eggs','Яйца','Eggs','10'],
  ['gry','Гръцко кисело мляко','Greek yoghurt (for the garlic sauce)','400 g'],
  ['pud','Протеинов пудинг','Protein pudding or protein yoghurt','4']]],
 ['Meat and fish',[
  ['chk','Пилешко филе','Chicken breast','800 g'],
  ['stk','Телешки стек','Beef steak','1 × 200 g'],
  ['sal','Сьомга филе','Salmon fillet','200 g'],
  ['prk','Свинско филе','Pork tenderloin','200 g']]],
 ['Fruit and vegetables',[
  ['ban','Банани','Bananas','9'],
  ['app','Ябълки','Apples','3'],
  ['cuc','Краставици','Cucumbers','3'],
  ['let','Айсберг','Iceberg lettuce','1'],
  ['avo','Авокадо','Avocado','1'],
  ['mus','Печурки','Mushrooms','250 g'],
  ['pot','Бейби картофи','Baby potatoes','500 g']]],
 ['Bakery',[
  ['tor','Пълнозърнести тортили','Wholewheat tortillas','1 pack'],
  ['rye','Ръжен хляб','Rye bread','1 (freeze half)']]],
 ['Frozen',[
  ['ber','Замразени горски плодове','Frozen berries','500 g'],
  ['grb','Замразен зелен фасул','Frozen green beans','400 g']]]
];
const STAPLES=[
 ['Breakfast',[
  ['gra','Гранола','Granola','500 g, ~2.5 weeks'],
  ['oat','Овесени ядки','Oats','500 g'],
  ['hon','Мед','Honey',''],
  ['pb','Фъстъчено масло','Peanut butter','']]],
 ['Carbs',[
  ['ric','Ориз','Rice','1 kg'],
  ['cus','Кус-кус','Couscous','500 g'],
  ['pas','Паста','Pasta','500 g'],
  ['ric2','Оризовки','Rice cakes','']]],
 ['Snacks',[
  ['nut','Орехи или бадеми','Walnuts or almonds','200 g, ~1.5 weeks'],
  ['dat','Фурми','Dates','200 g']]],
 ['Cupboard',[
  ['pes','Песто','Basil pesto','check label'],
  ['cor','Царевица консерва','Sweetcorn, tin',''],
  ['kas','Кашкавал','Kashkaval','200 g, ~3 weeks'],
  ['gar','Чесън','Garlic',''],
  ['dil','Копър','Dill',''],
  ['lem','Лимон','Lemon',''],
  ['oil','Зехтин','Olive oil','']]]
];

