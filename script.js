// Data
const roster = [
    { name: "Neil Sitapara", number: "10", pos: "SG", height: "6'0\"", year: "Senior" },
    { name: "Aydin Syed", number: "20", pos: "G", height: "5'10\"", year: "Senior" },
    { name: "Mofe Suleiman", number: "23", pos: "PG", height: "6'2\"", year: "Senior" },
    { name: "Omar Njikam", number: "30", pos: "F", height: "6'5\"", year: "Senior" },
    { name: "Freddy Igbinosa", number: "44", pos: "C", height: "6'6\"", year: "Senior" },
    { name: "Benjamin Dixson", number: "14", pos: "G", height: "5'10\"", year: "Junior" },
    { name: "Nick Mohyla", number: "24", pos: "F", height: "6'3\"", year: "Junior" },
    { name: "Lota Onwuameze", number: "40", pos: "F", height: "6'4\"", year: "Junior" },
    { name: "Mauricio Gubert", number: "5", pos: "G", height: "6'0\"", year: "Sophomore" },
    { name: "Marshall Flynn-Mitchell", number: "3", pos: "PG", height: "5'8\"", year: "Sophomore" },
    { name: "Merrick Trone", number: "5", pos: "G", height: "5'5\"", year: "Sophomore" },
    { name: "Adam Albdairi", number: "12", pos: "G", height: "6'2\"", year: "Sophomore" },
    { name: "Emmanuel Igbinosa", number: "22", pos: "F", height: "6'3\"", year: "Sophomore" },
    { name: "Ayden Stahl", number: "32", pos: "G", height: "6'1\"", year: "Sophomore" },
    { name: "Gabe Dyson", number: "33", pos: "G", height: "6'2\"", year: "Sophomore" },
    { name: "Ivan Ludwig", number: "34", pos: "F", height: "6'0\"", year: "Sophomore" }
];

const schedule = [
    {
        date: "Nov 28, 2025",
        opponent: "Illinois Valley Central",
        location: "Away",
        time: "7:00 PM",
        result: "L 82-48",
        gameType: "Non-Conference",
        history: [
            { date: "Nov 28, 2025", result: "L 82-48", location: "Away" }
        ],
        record: "0-1"
    },
    {
        date: "Nov 30, 2025",
        opponent: "Pekin",
        location: "Away",
        time: "7:00 PM",
        result: "W 57-48",
        gameType: "Non-Conference",
        history: [
            { date: "Nov 30, 2025", result: "W 57-48", location: "Away" }
        ],
        record: "1-0"
    },
    {
        date: "Dec 1, 2025",
        opponent: "St. Edward",
        location: "Home",
        time: "7:00 PM",
        result: "W 66-49",
        gameType: "Non-Conference",
        history: [
            { date: "Dec 1, 2025", result: "W 66-49", location: "Home" }
        ],
        record: "1-0"
    },
    {
        date: "Dec 3, 2025",
        opponent: "Joliet Catholic",
        location: "Home",
        time: "7:00 PM",
        result: "L 71-52",
        gameType: "Non-Conference",
        history: [
            { date: "Dec 3, 2025", result: "L 71-52", location: "Home" }
        ],
        record: "0-1"
    },
    {
        date: "Dec 5, 2025",
        opponent: "DePue",
        location: "Home",
        time: "7:00 PM",
        result: "W 67-31",
        gameType: "Conference",
        history: [
            { date: "Dec 5, 2025", result: "W 67-31", location: "Home" },
            { date: "Jan 24, 2025", result: "W 70-44", location: "Away" },
            { date: "Feb 7, 2024", result: "W 62-51", location: "Home" },
            { date: "Feb 2, 2023", result: "W 44-12", location: "Neutral" },
            { date: "Jan 20, 2023", result: "W 75-34", location: "Away" },
            { date: "Jan 24, 2022", result: "W 43-40", location: "Home" }
        ],
        record: "6-0"
    },
    {
        date: "Dec 6, 2025",
        opponent: "Parkview Christian Academy",
        location: "Home",
        time: "7:00 PM",
        result: "W 50-47",
        gameType: "Non-Conference",
        history: [
            { date: "Dec 6, 2025", result: "W 50-47", location: "Home" }
        ],
        record: "1-0"
    },
    {
        date: "Dec 8, 2025",
        opponent: "Plano",
        location: "Home",
        time: "7:00 PM",
        result: "L 61-50",
        gameType: "Non-Conference",
        history: [
            { date: "Dec 8, 2025", result: "L 61-50", location: "Home" }
        ],
        record: "0-1"
    },
    {
        date: "Dec 11, 2025",
        opponent: "Serena",
        location: "Home",
        time: "7:00 PM",
        result: "Upcoming",
        gameType: "Conference",
        history: [],
        record: "N/A"
    },
    {
        date: "Dec 13, 2025",
        opponent: "Westmont",
        location: "Home",
        time: "3:15 PM",
        result: "Upcoming",
        gameType: "Non-Conference",
        history: [],
        record: "N/A"
    },
    {
        date: "Dec 15, 2025",
        opponent: "St. Edward",
        location: "Away",
        time: "7:00 PM",
        result: "Upcoming",
        gameType: "Non-Conference",
        history: [],
        record: "N/A"
    },
    {
        date: "Jan 12, 2026",
        opponent: "Marian Central Catholic",
        location: "Away",
        time: "7:00 PM",
        result: "Upcoming",
        gameType: "Non-Conference",
        history: [],
        record: "N/A"
    },
    {
        date: "Jan 13, 2026",
        opponent: "LaMoille",
        location: "Away",
        time: "7:00 PM",
        result: "Upcoming",
        gameType: "Conference",
        history: [],
        record: "N/A"
    },
    {
        date: "Jan 16, 2026",
        opponent: "Hinckley-Big Rock",
        location: "Home",
        time: "7:00 PM",
        result: "Upcoming",
        gameType: "Conference",
        history: [],
        record: "N/A"
    },
    {
        date: "Jan 20, 2026",
        opponent: "Parkview Christian Academy",
        location: "Away",
        time: "7:00 PM",
        result: "Upcoming",
        gameType: "Non-Conference",
        history: [],
        record: "N/A"
    },
    {
        date: "Jan 22, 2026",
        opponent: "Leland",
        location: "Away",
        time: "7:00 PM",
        result: "Upcoming",
        gameType: "Conference",
        history: [],
        record: "N/A"
    },
    {
        date: "Jan 24, 2026",
        opponent: "Aurora East",
        location: "Away",
        time: "3:30 PM",
        result: "Upcoming",
        gameType: "Non-Conference",
        history: [],
        record: "N/A"
    },
    {
        date: "Jan 26, 2026",
        opponent: "Mooseheart",
        location: "Home",
        time: "6:30 PM",
        result: "Upcoming",
        gameType: "Non-Conference",
        history: [
            { date: "Feb 13, 2025", result: "W 56-51", location: "Home" }
        ],
        record: "1-0"
    },
    {
        date: "Jan 27, 2026",
        opponent: "Aurora Central Catholic",
        location: "Home",
        time: "7:00 PM",
        result: "Upcoming",
        gameType: "Non-Conference",
        history: [],
        record: "N/A"
    },
    {
        date: "Jan 30, 2026",
        opponent: "Somonauk",
        location: "Away",
        time: "7:00 PM",
        result: "Upcoming",
        gameType: "Conference",
        history: [],
        record: "N/A"
    },
    {
        date: "Feb 9, 2026",
        opponent: "Indian Creek",
        location: "Away",
        time: "7:00 PM",
        result: "Upcoming",
        gameType: "Conference",
        history: [],
        record: "N/A"
    },
    {
        date: "Feb 10, 2026",
        opponent: "Newark",
        location: "Away",
        time: "7:00 PM",
        result: "Upcoming",
        gameType: "Conference",
        history: [],
        record: "N/A"
    },
    {
        date: "Feb 12, 2026",
        opponent: "Earlville",
        location: "Home",
        time: "7:00 PM",
        result: "Upcoming",
        gameType: "Conference",
        history: [],
        record: "N/A"
    },
    {
        date: "Feb 20, 2026",
        opponent: "Lisle",
        location: "Away",
        time: "6:45 PM",
        result: "Upcoming",
        gameType: "Non-Conference",
        history: [],
        record: "N/A"
    },
    {
        date: "Feb 21, 2026",
        opponent: "Elmwood Park",
        location: "Home",
        time: "1:30 PM",
        result: "Upcoming",
        gameType: "Non-Conference",
        history: [],
        record: "N/A"
    }
];

// Helper function to get opponent logo filename
function getOpponentLogo(opponentName) {
    const logoMap = {
        'Illinois Valley Central': 'illinois-valley-central.png',
        'Pekin': 'pekin.png',
        'St. Edward': 'st-edward.png',
        'Joliet Catholic': 'joliet-catholic.png',
        'Newark': 'newark.png',
        'Earlville': 'earlville.png',
        'Indian Creek': 'indian-creek.png',
        'Somonauk': 'somonauk.png',
        'Leland': 'leland.png',
        'Hinckley-Big Rock': 'hinckley-big-rock.png',
        'LaMoille': 'lamoille.png',
        'Serena': 'serena.png',
        'Plano': 'plano.png',
        'DePue': 'depue.png',
        'Parkview Christian Academy': 'parkview-christian.png',
        'Westmont': 'westmont.png',
        'Marian Central Catholic': 'marian-central-catholic.png',
        'Aurora Central Catholic': 'aurora-central-catholic.png',
        'Aurora East': 'aurora-east.png',
        'Elmwood Park': 'elmwood-park.png',
        'Lisle': 'lisle.png',
        'Mooseheart': 'mooseheart.png'
    };

    return logoMap[opponentName] || null;
}

// Elements
const rosterContainer = document.getElementById('roster-container');
const scheduleContainer = document.getElementById('schedule-container');
const homeGamesContainer = document.getElementById('home-games-container');
const navBtns = document.querySelectorAll('.nav-btn');
const views = document.querySelectorAll('.view');

// Render Roster
function renderRoster() {
    rosterContainer.innerHTML = roster.map((player, index) => `
        <div class="card player-card" data-player-index="${index}" style="animation: fadeUp 0.5s ease backwards ${index * 0.05}s; cursor: pointer;">
            <div class="card-image-placeholder">
                ${player.name.charAt(0)}${player.name.split(' ')[1].charAt(0)}
            </div>
            <div class="player-number">${player.number}</div>
            <div class="card-content">
                <h3 class="card-title">${player.name}</h3>
                <p class="card-info">Position: <span style="color:var(--accent)">${player.pos}</span></p>
                <p class="card-info">Height: ${player.height} | Year: ${player.year}</p>
            </div>
        </div>
    `).join('');

    // Add click handlers to player cards
    document.querySelectorAll('.player-card').forEach(card => {
        card.addEventListener('click', () => {
            const playerIndex = parseInt(card.dataset.playerIndex);
            openPlayerModal(roster[playerIndex]);
        });
    });
}

// Player Modal Functions
function openPlayerModal(player) {
    const modal = document.getElementById('player-modal');
    const modalContent = document.getElementById('modal-player-content');

    modalContent.innerHTML = `
        <div class="modal-player-header">
            <div class="modal-player-number">#${player.number}</div>
            <div class="modal-player-initials">${player.name.charAt(0)}${player.name.split(' ')[1].charAt(0)}</div>
        </div>
        <h1 class="modal-player-name">${player.name}</h1>
        <div class="modal-player-stats">
            <div class="stat-item clickable-stat" onclick="openPositionModal()">
                <span class="stat-label">Position</span>
                <span class="stat-value">${player.pos}</span>
                <span class="click-hint">Click to learn more</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Height</span>
                <span class="stat-value">${player.height}</span>
            </div>
            <div class="stat-item">
                <span class="stat-label">Year</span>
                <span class="stat-value">${player.year}</span>
            </div>
        </div>
        <div class="modal-player-bio">
            <h3>Player Bio</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closePlayerModal() {
    const modal = document.getElementById('player-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

function openPositionModal() {
    const modal = document.getElementById('position-modal');
    modal.classList.add('active');
}

function closePositionModal() {
    const modal = document.getElementById('position-modal');
    modal.classList.remove('active');
}

// Render Schedule
function renderSchedule() {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); // Reset to start of day for comparison

    scheduleContainer.innerHTML = schedule.map((game, index) => {
        const gameDate = new Date(game.date);
        gameDate.setHours(0, 0, 0, 0); // Reset to start of day for comparison

        const isPast = gameDate < currentDate;
        const isToday = gameDate.getTime() === currentDate.getTime();

        let dateClass = 'match-date';
        let statusClass = 'match-status';
        let displayResult = game.result;

        if (isPast) {
            if (game.result.startsWith('W')) {
                dateClass += ' date-win';
                statusClass += ' result-win';
            } else if (game.result.startsWith('L')) {
                dateClass += ' date-loss';
                statusClass += ' result-loss';
            } else {
                dateClass += ' date-no-info';
                statusClass += ' result-no-info';
            }
        } else {
            statusClass += game.location === 'Home' ? ' status-home' : ' status-away';
            if (isToday && game.result === 'Upcoming') {
                displayResult = 'TODAY';
            }
        }

        const opponentLogo = getOpponentLogo(game.opponent);
        const opponentLogoHTML = opponentLogo ? `<img src="images/logos/${opponentLogo}" alt="${game.opponent}" class="team-logo">` : '';
        const imsaLogoHTML = '<img src="images/logos/imsa.png" alt="IMSA" class="team-logo">';

        // Format matchup based on home/away
        let matchupHTML = '';
        if (game.location === 'Home') {
            matchupHTML = `${imsaLogoHTML} <span>IMSA vs. ${game.opponent}</span> ${opponentLogoHTML}`;
        } else {
            matchupHTML = `${opponentLogoHTML} <span>${game.opponent} vs. IMSA</span> ${imsaLogoHTML}`;
        }

        const todayClass = isToday ? ' today-schedule-item' : '';

        return `
        <div class="schedule-item game-item${todayClass}" data-game-index="${index}" style="animation: fadeUp 0.5s ease backwards ${index * 0.1}s; cursor: pointer;">
            <div class="${dateClass}">${game.date}</div>
            <div class="match-opponent">
                ${matchupHTML}
            </div>
            <div class="match-location">${game.location} @ ${game.time} <span class="game-type-badge">${game.gameType}</span></div>
            <div class="${statusClass}">${displayResult}</div>
        </div>
    `;
    }).join('');

    // Add click handlers to game items
    document.querySelectorAll('.game-item').forEach(item => {
        item.addEventListener('click', () => {
            const gameIndex = parseInt(item.dataset.gameIndex);
            openGameModal(schedule[gameIndex]);
        });
    });
}

// Render Home Games Preview
function renderHomeGames() {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    const upcomingHomeGames = schedule.filter(g => {
        const gameDate = new Date(g.date);
        gameDate.setHours(0, 0, 0, 0);
        return g.location === 'Home' && gameDate >= currentDate;
    });

    if (upcomingHomeGames.length > 0) {
        homeGamesContainer.innerHTML = upcomingHomeGames.map((game, index) => {
            const gameIndex = schedule.indexOf(game);
            const isNext = index === 0;

            const gameDate = new Date(game.date);
            gameDate.setHours(0, 0, 0, 0);
            const isToday = gameDate.getTime() === currentDate.getTime();

            const opponentLogo = getOpponentLogo(game.opponent);
            const opponentLogoHTML = opponentLogo ? `<img src="images/logos/${opponentLogo}" alt="${game.opponent}" class="home-game-logo">` : '';
            const imsaLogoHTML = '<img src="images/logos/imsa.png" alt="IMSA" class="home-game-logo">';

            const todayClass = isToday ? ' today-game-card' : '';

            return `
            <div class="card game-card ${isNext ? 'next-game-card' : 'upcoming-game-card'}${todayClass}" data-game-index="${gameIndex}" style="animation: fadeUp 0.5s ease backwards ${index * 0.1}s; cursor: pointer;">
                <div class="card-content" style="padding: 2rem; text-align: center;">
                    ${isNext ? '<p class="card-info" style="color:var(--accent); text-transform:uppercase; font-weight: 700;">Next Home Game</p>' : ''}
                    ${isToday ? '<p class="card-info" style="color:#FFD700; text-transform:uppercase; font-weight: 700; font-size: 1.2rem;">TODAY</p>' : ''}
                    <div class="home-game-matchup">
                        ${imsaLogoHTML}
                        <h3 class="card-title" style="font-size: ${isNext ? '2rem' : '1.5rem'}; margin: 0 1rem;">IMSA vs. ${game.opponent}</h3>
                        ${opponentLogoHTML}
                    </div>
                    <p class="card-info" style="font-size: ${isNext ? '1.2rem' : '1rem'}; color: #fff; margin-top: 1rem;">${game.date}</p>
                    <p class="card-info">${game.time}</p>
                    <p class="card-info" style="margin-top: 0.5rem;"><span class="game-type-badge">${game.gameType}</span></p>
                </div>
            </div>
        `;
        }).join('');

        // Add click handlers
        document.querySelectorAll('.game-card').forEach(card => {
            card.addEventListener('click', () => {
                const gameIndex = parseInt(card.dataset.gameIndex);
                openGameModal(schedule[gameIndex]);
            });
        });
    } else {
        homeGamesContainer.innerHTML = '<p>No upcoming home games scheduled.</p>';
    }
}

// Game Modal Functions
function openGameModal(game) {
    const modal = document.getElementById('game-modal');
    const modalContent = document.getElementById('modal-game-content');

    const historyHTML = game.history.length > 0
        ? game.history.map(h => `
            <div class="history-item">
                <span class="history-date">${h.date}</span>
                <span class="history-result">${h.result}</span>
                <span class="history-location">${h.location}</span>
            </div>
        `).join('')
        : '<p class="no-history">No previous matchups recorded</p>';

    // Determine game outcome for display
    let outcomeHTML = '';
    const currentDate = new Date();
    const gameDate = new Date(game.date);

    if (gameDate < currentDate && game.result !== 'Upcoming') {
        if (game.result.startsWith('W')) {
            outcomeHTML = '<div class="game-outcome outcome-win">IMSA Won</div>';
        } else if (game.result.startsWith('L')) {
            outcomeHTML = '<div class="game-outcome outcome-loss">IMSA Lost</div>';
        }
    }

    // Get opponent logo
    const opponentLogo = getOpponentLogo(game.opponent);

    // Determine logo positioning based on home/away
    const leftLogo = game.location === 'Home' ? 'images/logos/imsa.png' : (opponentLogo ? `images/logos/${opponentLogo}` : '');
    const rightLogo = game.location === 'Home' ? (opponentLogo ? `images/logos/${opponentLogo}` : '') : 'images/logos/imsa.png';
    const leftTeam = game.location === 'Home' ? 'IMSA' : game.opponent;
    const rightTeam = game.location === 'Home' ? game.opponent : 'IMSA';

    modalContent.innerHTML = `
        <div class="modal-game-background">
            ${leftLogo ? `<img src="${leftLogo}" class="bg-logo bg-logo-left" alt="${leftTeam}">` : ''}
            ${rightLogo ? `<img src="${rightLogo}" class="bg-logo bg-logo-right" alt="${rightTeam}">` : ''}
        </div>
        <div class="modal-game-header">
            <div class="team-logos-header">
                ${leftLogo ? `<div class="team-logo-container"><img src="${leftLogo}" alt="${leftTeam}" class="modal-team-logo"><span class="team-name">${leftTeam}</span></div>` : ''}
                <div class="vs-text">VS</div>
                ${rightLogo ? `<div class="team-logo-container"><img src="${rightLogo}" alt="${rightTeam}" class="modal-team-logo"><span class="team-name">${rightTeam}</span></div>` : ''}
            </div>
            ${outcomeHTML}
            <div class="modal-game-info">
                <div class="game-detail">
                    <span class="detail-label">Date</span>
                    <span class="detail-value">${game.date}</span>
                </div>
                <div class="game-detail">
                    <span class="detail-label">Time</span>
                    <span class="detail-value">${game.time}</span>
                </div>
                <div class="game-detail">
                    <span class="detail-label">Location</span>
                    <span class="detail-value">${game.location}</span>
                </div>
                <div class="game-detail">
                    <span class="detail-label">Score</span>
                    <span class="detail-value">${game.result}</span>
                </div>
            </div>
        </div>
        
        <div class="modal-matchup-history">
            <h2 class="history-header">
                Matchup History
                <span class="history-record">${game.record}</span>
            </h2>
            <div class="history-list">
                ${historyHTML}
            </div>
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeGameModal() {
    const modal = document.getElementById('game-modal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Navigation Logic
function navigateTo(targetId) {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Update Nav
    navBtns.forEach(btn => {
        if (btn.dataset.target === targetId) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Update View
    views.forEach(view => {
        if (view.id === targetId) {
            view.classList.add('active');
        } else {
            view.classList.remove('active');
        }
    });
}

navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        navigateTo(target);
    });
});

// Update accuracy date display
function updateAccuracyDate() {
    const dateElement = document.getElementById('accuracy-date');
    if (dateElement) {
        const now = new Date();
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        const formattedDate = now.toLocaleDateString('en-US', options);
        dateElement.textContent = `Accurate as of ${formattedDate}`;
    }
}

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    renderRoster();
    renderSchedule();
    renderHomeGames();
    updateAccuracyDate();

    // Set up automatic refresh at midnight to keep data current
    scheduleNextRefresh();
});

// Schedule automatic refresh at midnight
function scheduleNextRefresh() {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);

    const timeUntilMidnight = tomorrow - now;

    setTimeout(() => {
        // Refresh the schedule and home games displays
        renderSchedule();
        renderHomeGames();
        updateAccuracyDate();

        // Schedule the next refresh
        scheduleNextRefresh();
    }, timeUntilMidnight);
}
