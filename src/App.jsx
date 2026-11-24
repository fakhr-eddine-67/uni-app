import "./App.css";
import studentImage from "./assets/student.jpg";

const etudiant = {
  prenom: "Haj Ali",
  nom: "Fakhr Eddine",
  email: "hadjalifakhri@gmail.com",
  telephone: "+216 67 676 767",
  filiere: "Génie Logiciel et Systèmes d'Information",
  anneeEtude: "2ème année",
  groupe: "GLSI 2",
  ville: "Mahdia",
};

function App() {
  return (
    <div className="container">
      <div className="card">
        <img src={studentImage} alt="Photo de l'étudiant" />
        <h1>Fiche étudiant</h1>

        <p><strong>Nom & Prénom :</strong> {etudiant.prenom} {etudiant.nom}</p>
        <p><strong>Email :</strong> {etudiant.email}</p>
        <p><strong>Téléphone :</strong> {etudiant.telephone}</p>
        <p><strong>Filière :</strong> {etudiant.filiere}</p>
        <p><strong>Année d'étude :</strong> {etudiant.anneeEtude}</p>
        <p><strong>Groupe :</strong> {etudiant.groupe}</p>
        <p><strong>Ville :</strong> {etudiant.ville}</p>

        <a className="btn" href={`mailto:${etudiant.email}`}>Contacter</a>
      </div>
    </div>
  );
}

export default App;