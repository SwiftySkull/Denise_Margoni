<?php

namespace App\DataFixtures;

use App\Entity\Peinture;
use App\Entity\Situation;
use App\Entity\Categorie;
use App\Entity\Cadre;
use App\Entity\Taille;
use App\Entity\Technique;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class AppFixtures extends Fixture
{
    private $situationList = ['Non précisé', 'Chez l\'artiste', 'Vendu à un particulier', 'En encadrement', 'Vendu à des profesionnels', 'Actuellement en exposition'];

    private $cadreList = ['Non renseigné', 'Pas encadré', 'Cadre seul', 'Cadre + verre', 'Encadrement Spécial'];

    private $techniqueList = ['Gouache', 'Huile sur toile', 'Collage', 'Peinture à l\'eau', 'Dessin de tissus'];

    private $categorieList = ['Arbres', 'Machine agricole', 'Champs', 'Abbaye de Beauport', 'Saint Cloud'];

    private $tailleList = [
        '1F',
        '2F',
        '3F',
        '4F',
        '5F',
        '6F',
        '8F',
        '10F',
        '12F',
        '15F',
        '20F',
        '25F',
        '30F',
        '40F',
        '50F',
        '60F',
        '80F',
        '100F',
        '120F',
        '1P',
        '2P',
        '3P',
        '4P',
        '5P',
        '6P',
        '8P',
        '10P',
        '12P',
        '15P',
        '20P',
        '25P',
        '30P',
        '40P',
        '50P',
        '60P',
        '80P',
        '100P',
        '120P',
        '1M',
        '2M',
        '3M',
        '4M',
        '5M',
        '6M',
        '8M',
        '10M',
        '12M',
        '15M',
        '20M',
        '25M',
        '30M',
        '40M',
        '50M',
        '60M',
        '80M',
        '100M',
        '120M',
    ];

    public function load(ObjectManager $manager): void
    {   
        for ($i=0; $i < count($this->situationList); $i++) { 
            $situation = new Situation();

            $situation->setCollection($this->situationList[$i]);

            $manager->persist($situation);
        }

        for ($i=0; $i < count($this->cadreList); $i++) { 
            $cadre = new Cadre();

            $cadre->setEncadrement($this->cadreList[$i]);

            $manager->persist($cadre);
        }

        for ($i=0; $i < count($this->techniqueList); $i++) { 
            $technique = new Technique();

            $technique->setType($this->techniqueList[$i]);

            $manager->persist($technique);
        }

        for ($i=0; $i < count($this->categorieList); $i++) { 
            $categorie = new Categorie();

            $categorie->setNom($this->categorieList[$i]);

            $manager->persist($categorie);
        }

        for ($i=0; $i < count($this->tailleList); $i++) { 
            $taille = new Taille();

            $taille->setFormat($this->tailleList[$i]);

            $manager->persist($taille);
        }

        for ($i=0; $i < 1000; $i++) { 
            $peinture = new Peinture();

            $peinture->setTitre('Peinture '.$i);
            $peinture->setHauteur(rand(15, 60));
            $peinture->setLargeur(rand(15, 60));
            $peinture->setInfos('Descritption du tableau '.$i);
            $peinture->setLocation('Maison');
            $peinture->setPicture('chemin/de/la/photo/'.$i);
            $peinture->setCreationDate(new \DateTime('@'.rand(-1383899604, time())));

            $manager->persist($peinture);
        }
        
        $manager->flush();
    }
}
