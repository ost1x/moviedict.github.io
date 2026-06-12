const dictionary = {
    forest: {
        "Tree": "Дерево", "Leaf": "Лист", "Root": "Корень", "Branch": "Ветка", 
        "Forest": "Лес", "Moss": "Мох", "Pine": "Сосна", "Nature": "Природа", 
        "Squirrel": "Белка", "Path": "Тропинка"
    },
    sport: {
        "Ball": "Мяч", "Goal": "Гол", "Training": "Тренировка", "Match": "Матч", 
        "Runner": "Бегун", "Victory": "Победа", "Coach": "Тренер", "Game": "Игра", 
        "Team": "Команда", "Stadium": "Стадион"
    }
};

function showWords(theme) {
    const display = document.getElementById('word-display');
    const words = dictionary[theme];
    
    let html = `<h3>${theme === 'forest' ? 'Лес' : 'Спорт'}</h3><ul>`;
    for (let en in words) {
        html += `<li><strong>${en}</strong> — ${words[en]}</li>`;
    }
    html += `</ul>`;
    
    display.innerHTML = html;
    display.classList.add('fade-in');
}