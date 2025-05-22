export function header (isMainPage = false) { 
    const path = isMainPage? './' : '../';

    document.body.insertAdjacentHTML ('afterbegin', `
    <header class="main-header">
        <nav>
            <a href="${path}/">Main</a>
            <a href="${path}/cards/">Cards</a>
            <a href="${path}/darz/">Darzas</a>
            <a href="${path}/plus-1/">Plus 1</a>
            <a href="${path}/spalvos/">Spalvos</a>
            <a href="${path}/AD/">Spalvos</a>
            <a href="${path}/todo/">Ad-to-Do</a>
            <a href="${path}/add-block/">ad-block</a>
            <a href="${path}/todo-beter/">Add todo</a>
            <a href="${path}/krepsinis/">Krepsinis</a>
        </nav>
    </header>`) 
    } 