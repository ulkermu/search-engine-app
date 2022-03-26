import SearchBar from "./SearchBar";
import User from "./User";
import tesodevLogo from "../img/tesodev.png";
import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { user } = useContext(UserContext);
  const { search } = useContext(UserContext);
  const [currentPage] = useState(1);
  const [userPerPage] = useState(search==="" ? 0 : 3);

  //* Finding Last User;
  const indexOfLastUser = currentPage * userPerPage;
  //* Finding First User;
  const indexOfFirstUser = indexOfLastUser - userPerPage;

  return (
    <div className="app">
      <header className="app-logo">
        <img className="app-img" src={tesodevLogo} alt="Company Logo" />
        <p className="app-p">Search web app</p>
      </header>
      <main className="app-main">
        <div className="app-search">
          <SearchBar />
        </div>
        <div className="app-user-list">
          <div className="user-lists">
            <User
              user={user}
              indexOfFirstUser={indexOfFirstUser}
              indexOfLastUser={indexOfLastUser}
            />
            <Link to="/showmore" className="show-more-button">
              Show more...
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
/*
1- Attiklari dokumana bakiyorum, verdikleri json datayi local storage ya da cookie ye koyun demis state e koymusun, local storage yaparsin onu
//2- Search sadece isim icin calisiyor, name surname demis dokumanda email de ararsa iyi olur
//3- ana sayfada arama yapip show more dedikten sonra, /showmore a redirect oluyor ama ne aradigimi goremiyorum. yaptigim arama search barda gorunmeli
//4- Name asc / desc dogru calismiyor First name e gore alfabetik siralamsi lazim
//5- Sayfalar arasi ileri geri navigate ettigimde state kayboluyor, search barda aradigim seyi goremiyorum
6- Search bar bosken search e basamamam lazim, bak tasarimda error state i koymus eger bossa ve search etmeye calisiyorsa kirmizi olmali input
//7- Order by kisminda bi problem var anlamadim, ust uste degistir, etkilemiyor listeyi.
8- Previous next butonlarinin sadece textlerine tiklaniyor, kenarlardaki bosluklara tiklanmiyor
9- Search inputlari onChange inde degil de "search" butonuna basildiginda calismali arama, tasarim ona gore yapilmis
10- "el" diye arama yaptim detay sayfasinda, sonuc yok ama 4 sayfa navigation gosteriyor 14. sayfaya gelip yaptim bu aramayi, ve yukardaki ekran goruntusundeki gibi sonuc dondu Ne olursa olsun elindeki json data uzerinde arama yapmali app, baska bir state e bagli olmamali
//11- Bu isimleri falan niye 3 nokta ile kestin? tasarimda boyle bir sey yok
//12- Order by kisminda "name desc" 2. satira dusuyor
13- Ana sayfada sonuclar sadece arama yapildiginda gosterilmeli, yani basta sadece search bar ve button olacak
*/