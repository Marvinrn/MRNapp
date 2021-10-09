import React from 'react';
import cvPhoto from '../assets/mrnJojo1.png'

const Cv = () => {
    return (
        <section className="cvSection">
            <h1 className="cvTitle">Mon CV</h1>
            <div className="cvContent">
                <aside className="cvAside">
                    <img className="cvPhoto" src={cvPhoto} alt='logo' />
                    <div className="cvInfo">
                        <p className="info"><i className="fas fa-envelope" /> marvinnrn@gmail.com</p>
                        <p className="info"><i className="fab fa-linkedin" /> @MarvinRodriguesNovo </p>
                        <p className="info"><i className="fab fa-github" /> @Marvinrn</p>
                        <p className="info"><i className="fas fa-map-marker-alt" /> 2 Rue de Buzenval Saint-CLoud 92210 </p>
                        <p className="info"><i className="fas fa-calendar-alt" /> 23 ans</p>
                        <p className="info"><i className="fas fa-phone-square" /> 06 45 79 18 22 </p>
                    </div>

                    <div className="softSkills">
                        <h2 className="softTitle">Soft-Skills</h2>
                        <p className="skills">Autonomie</p>
                        <p className="skills">Rigueur</p>
                        <p className="skills">Ponctualité</p>
                        <p className="skills">Adaptabilité</p>
                        <p className="skills">Patience</p>
                        <p className="skills">Esprit d'équipe</p>
                        <p className="skills">Curiosité</p>
                        <p className="skills">Prise de recul</p>
                    </div>

                    <div className="softSkills">
                        <h2 className="softTitle">Langues</h2>
                        <p className="skills">Anglais: <span>courant</span></p>
                    </div>

                    <div className="centerOfInterest">
                        <h2 className="interestTitle">Centres d'intérêt</h2>
                        <h3 className="interestSubTitle">Jeux vidéos:</h3>
                        <p className="interest">Notamment les JRPG tels
                            que la série des Dragon
                            Quest ou encore celle des
                            Final Fantasy</p>
                        <h3 className="interestSubTitle">Culture Nipponne:</h3>
                        <p className="interest">J'aime énormément les
                            mangas et l'animation
                            japonaise</p>
                        <h3 className="interestSubTitle">Voyages:</h3>
                        <p className="interest">2019: Canada
                            <br />
                            2019: États-Unis
                            <br />
                            2016: Allemagne</p>
                        <h3 className="interestSubTitle">Informatique</h3>
                    </div>
                </aside>

                <div className="cvCareer">
                    <div className="CV">
                        {/* INTRO CV */}
                        <h1 className="bigTitle">Marvin RODRIGUES NOVO</h1>
                        <h2 className="mediumTitle">Développeur Web
                            <br />
                            Contrat d'apprentissage
                        </h2>
                        <p className="cvIntro">
                            Durée : 12 mois <br />
                            Rythme : 4 jours / 1 jour <br />
                            Trouvant la résolution de problèmes amusante et ayant une approche ludique du
                            développement web, je souhaite apporter mes compétences à votre entreprise
                            tout en réalisant ma formation de développeur web
                        </p>

                        {/* PARTIE COMPÉTENCES */}
                        <h3 className="smallTitles">Compétences</h3>
                        <p className="hardSkills">React</p>
                        <p className="hardSkills">JavaScript</p>
                        <p className="hardSkills">HTML5</p>
                        <p className="hardSkills">CSS3</p>
                        <p className="hardSkills">Sass</p>
                        <p className="hardSkills">Git/GitHub/GitKraken</p>

                        {/* PARTIE FORMATION/DIPLOMES */}
                        <h3 className="smallTitles"> Diplômes et Formations</h3>
                        <h4 className="formations"> DÉVELOPPEUR WEB - Certificat RNCP de niveau 5 (Bac + 2)</h4>
                        <p className="cvText"><span className="blueTag">OpenClassrooms</span> En ligne/ <span className="greyTag">De 2021 à 2022</span></p>
                        <p className="cvText"> - Construire un site web fluide s’adaptant à tout type d’écran</p>
                        <p className="cvText"> - Faire réagir la page web en fonction des actions de l’utilisateur en JavaScript</p>
                        <p className="cvText"> - Concevoir un site maintenable grâce à la gestion des erreurs et exceptions</p>
                        <p className="cvText"> - Se connecter à un service web pour exploiter des données tierces (API)</p>
                        <p className="cvText"> - Créer, gérer et afficher le contenu d’une base de données</p>

                        <h4 className="formations"> Prep'Apprentissage - Développeur Web</h4>
                        <p className="cvText"><span className="blueTag">OpenClassrooms</span> En ligne/ <span className="greyTag">De février 2021 à avril 2021</span></p>
                        <p className="cvText"> - Mettre en place son environnement Front-End</p>
                        <p className="cvText"> - Implémenter une interface responsive</p>
                        <p className="cvText"> - Intégrer du contenu conformément à une maquette</p>
                        <p className="cvText"> - Utiliser un système de gestion de versions pour le suivi du projet et son hébergement</p>

                        <h4 className="formations"> Licence Mathématiques-Physique-Chimie (MPCI)</h4>
                        <p className="cvText"><span className="blueTag">UVSQ - UFR des Sciences</span> Versailles, France/ <span className="greyTag">De septembre 2019 à mai 2020</span></p>

                        <h4 className="formations"> Licence  Mathématiques  et  Informatique  Appliquées  aux  SciencesHumaines et Sociales (MIASHS)</h4>
                        <p className="cvText"><span className="blueTag">UVSQ - UFR des Sciences</span> Versailles, France/ <span className="greyTag">De septembre 2018 à mai 2019</span></p>

                        <h4 className="formations"> Baccalauréat scientifique</h4>
                        <p className="cvText"><span className="blueTag">Lycée Alexandre Dumas</span> Saint-Cloud, France/ <span className="greyTag">De septembre 2017 à juin 2018</span></p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Cv;