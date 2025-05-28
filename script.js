const translations = {
  en: {
    showRandom: "Show Random Quote",
    findKeyword: "Find by Keyword",
    like: "Like",
    toggleFavorites: "Show/Hide Favorites",
    likedQuotes: "Liked Quotes",
    noQuote: "No quote found for that keyword.",
    placeholder: "Enter keyword..."
  },
  hy: {
    showRandom: "Ցուցադրել պատահական միտք",
    findKeyword: "Փնտրել ըստ բառի",
    like: "Հավանել",
    toggleFavorites: "Ցուցադրել/թաքցնել նախընտրածները",
    likedQuotes: "Նախընտրած մտքեր",
    noQuote: "Չկան համապատասխան մտքեր այդ բառով։",
    placeholder: "Մուտքագրեք բառ․․․"
  }
};

const quotes = [
  "Հոգին միշտ պետք է կիսաբաց լինի՝ պատրաստ ընդունելու էքստազային պահերը։ – Եղիշե Չարենց",
  "Գրքերը աշխարհի հավաքած հարստությունն են և սերունդների ու ազգերի արժանի ժառանգությունը։ – Հովհաննես Թումանյան",
  "Առանց սիրո կյանք չկա։ – Պարույր Սևակ",
  "Արվեստը հոգու լեզուն է։ – Մարտիրոս Սարյան",
  "Մարդն առանց հայրենիքի նման է գիշերվա առանց աստղերի։ – Ավետիք Իսահակյան",
  "Գրիչը սրից զորավոր է։ – Րաֆֆի",
  "Մեր կռիվներում ես տեսել եմ ամենալավ հայը՝ մահվան դատապարտված, բայց մռայլ վճռականությամբ հարձակվող մարտիկ։ – Գարեգին Նժդեհ",
  "Կյանքի իմաստը հոգևոր կատարելագործումն է, ոչ թե նյութականը։ – Գարեգին Նժդեհ",
  "Հայրենիքը տալիս է արդար հպարտության զգացում, խորագույն տառապանք, ամենաամբողջական խոստովանություն և ամենասուրբ մահ։ – Գարեգին Նժդեհ",
  "Հայ լինելը դաժան պարտականություն է և հերոսական ձեռնարկ։ – Կոստան Զարյան", 
  "Քո կյանքի ժամանակ ապրիր այնպես, որ այդ հրաշալի ժամանակում չավելացնես աշխարհի տրտմությունն ու վիշտը։ – Վիլյամ Սարոյան",
  "Արվեստի դերը բնակելի աշխարհ ստեղծելն է։ – Վիլյամ Սարոյան",
  "Պետք է այրվել՝ լուսավորելու համար։ – Հովհաննես Թումանյան",
  "Եթե ուզում ես փրկել քո եղբորը, պետք է պատրաստ լինես խաչվել նրա կողմից։ – Ռաֆֆի",
  "Որքան գրպանն է լցված, այնքան սիրտն է դատարկ։ – Դանիել Վարուժան",
  "Համերաշխությունը կարող է լեռներ շարժել։ – Ջիվանի",
  "Յուրաքանչյուր մարդ պետք է բարձրանա իր լեռը։ – Հայկական առակ",
  "Ձեռքը ձեռք է լվանում, երկու ձեռքը՝ դեմքը։ – Հայկական առակ",
  "Դաշույնի վերքը սպիանում է, լեզվի վերքը՝ երբեք։ – Հայկական առակ",
  "Լավ է մրջյունի գլուխ լինել, քան առյուծի պոչ։ – Հայկական առակ",
  "Եթե չես կարող հարստանալ, հարուստի հարևան եղիր։ – Հայկական առակ", 
  "Անթերի ընկեր փնտրողը երբեք ընկեր չի գտնի։ – Հայկական առակ",
  "Եթե մորուքով իմաստուն լինեին, բոլոր նոխազները մարգարե կլինեին։ – Հայկական առակ",
  "Ով հարցնում է՝ մեկ ամոթ է ապրում, ով չի հարցնում՝ երկու։ – Հայկական առակ",
  "Չես կարող քաղցը հագեցնել՝ ուրիշի աշխատանքը նայելով։ – Հայկական առակ",
  "Ցանկանալը գործի կեսն է։ – Հայկական առակ",
  "Մեկ չար գործը մյուսին է բերում։ – Հայկական առակ",
  "Փոքր բաներից սկսիր, որ մեծին հասնես։ – Հայկական առակ",
  "Թքով կրակ չեն հանգցնում։ – Հայկական առակ",
  "Քանի լեզու գիտես, այնքան մարդ ես։ – Հայկական առակ",
  "Մատյանի ծայրին բռունցքով չես խփի։ – Հայկական առակ",
  "Ինչպես ջրաղացը՝ երկու քարի, այդպես ընկերությունը՝ երկու խելքի։ – Հայկական առակ",
  "Երգերը շատ գիտեմ, բայց երգել չգիտեմ։ – Հայկական առակ",
  "Ընկերոջդ հետ կեր, բայց գործ չար։ – Հայկական առակ",
  "Մատդ առաջդ պահելով՝ չես թաքնվի։ – Հայկական առակ",
  "Թռչուններին սերմով են բռնում, մարդկանց՝ փողով։ – Հայկական առակ",
  "Ոտքի ցավն արագ է անցնում, գլխինը՝ ոչ։ – Հայկական առակ",
  "Շատ անգամ զղջում ենք այն մեղքերի համար, որ երբեք չենք գործել։ – Հայկական առակ",
  "Անամոթ մարդուց Աստված երես է թեքում։ – Հայկական առակ",
  "Կույրերի ամենամեծ երազանքն է՝ աչք ունենալ։ – Հայկական առակ",
  "Երբ ներս ես մտնում, մտածիր՝ ինչպես դուրս կգաս։ – Հայկական առակ",
  "Բոլոր հարստությունները գալիս են հողից։ – Հայկական առակ",
  "Ժողովրդի ձայնը զենքի որոտից բարձր է։ – Հայկական առակ",
  "Կռվի ավարտը զղջումն է։ – Հայկական առակ",
  "Միասնականությունը ուժ է։ – Հայկական առակ",
  "Ջուրը իր ճանապարհը կգտնի։ – Հայկական առակ"
  ];
  

let favorites = [];

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  displayQuote(quote);
}

function findQuoteByKeyword() {
  const keyword = document.getElementById("keywordInput").value.toLowerCase();
  const found = quotes.find(q => q.toLowerCase().includes(keyword));
  if (found) {
    displayQuote(found);
  } else {
    displayQuote(window.noQuoteMessage || "No quote found.");
;
  }
}

function displayQuote(text) {
  const quoteDiv = document.getElementById("quote");
  quoteDiv.style.animation = "none";
  quoteDiv.offsetHeight; // Сброс анимации
  quoteDiv.style.animation = null;
  quoteDiv.textContent = text;
}

function likeQuote() {
  const quote = document.getElementById("quote").textContent;
  if (quote && !favorites.includes(quote)) {
    favorites.push(quote);
    updateFavorites();
  }
}

function updateFavorites() {
  const list = document.getElementById("favoritesList");
  list.innerHTML = "";
  favorites.forEach(fav => {
    const li = document.createElement("li");
    li.textContent = fav;
    list.appendChild(li);
  });
}

function toggleFavorites() {
  const favBlock = document.getElementById("favorites");
  favBlock.style.display = favBlock.style.display === "none" ? "block" : "none";
} 

function setLanguage(lang) {
  document.querySelector("button[onclick='showRandomQuote()']").textContent = translations[lang].showRandom;
  document.querySelector("button[onclick='findQuoteByKeyword()']").textContent = translations[lang].findKeyword;
  document.querySelector("button[onclick='likeQuote()']").textContent = translations[lang].like;
  document.querySelector("button[onclick='toggleFavorites()']").textContent = translations[lang].toggleFavorites;
  document.getElementById("favorites").querySelector("h2").textContent = translations[lang].likedQuotes;
  document.getElementById("keywordInput").placeholder = translations[lang].placeholder;   
  window.noQuoteMessage = translations[lang].noQuote;
}                                             
