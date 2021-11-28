<?php

namespace App\Controller;

use App\Repository\CadreRepository;
use App\Repository\CategorieRepository;
use App\Repository\PeintureRepository;
use App\Repository\SituationRepository;
use App\Repository\TailleRepository;
use App\Repository\TechniqueRepository;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class PeintureController extends AbstractController
{
    #[Route('/update_all_infos', name: 'update_all_infos')]
    public function index(
        TailleRepository $tailleRepository,
        SituationRepository $situationRepository,
        TechniqueRepository $techniqueRepository,
        CadreRepository $cadreRepository,
        CategorieRepository $categorieRepository,
        PeintureRepository $peintureRepository,
        EntityManagerInterface $entityManager
    )
    {
        $tailles = $tailleRepository->findAll();
        $situations = $situationRepository->findAll();
        $techniques = $techniqueRepository->findAll();
        $cadres = $cadreRepository->findAll();
        $categories = $categorieRepository->findAll();
        // dump($situations[array_Rand($situations)]);

        $peintures = $peintureRepository->findAll();
        // dump($peintures[5]);

        foreach ($peintures as $key => $value) {
            $value->setTaille($tailles[array_rand($tailles)]);
            $value->setCadre($cadres[array_rand($cadres)]);
            $value->setSituation($situations[array_rand($situations)]);

            $x = rand(1, 5);
            for ($i=0; $i < $x; $i++) { 
                $value->addCategorie($categories[array_rand($categories)]);
                $value->addTechnique($techniques[array_rand($techniques)]);
            }
            
        }

        $entityManager->flush();

        dd('All updates finies');
        // return $this->render('peinture/index.html.twig', [
        //     'controller_name' => 'PeintureController',
        // ]);
    }

    /**
     * @Route(
     *      "/",
     *      name="home",
     * )
     */
    public function home(
        TailleRepository $tailleRepository,
        SituationRepository $situationRepository,
        TechniqueRepository $techniqueRepository,
        CadreRepository $cadreRepository,
        CategorieRepository $categorieRepository,
        PeintureRepository $peintureRepository,
    )
    {
        // $tailles = $tailleRepository->findAll();
        // $situations = $situationRepository->findAll();
        // $techniques = $techniqueRepository->findAll();
        // $cadres = $cadreRepository->findAll();
        // $categories = $categorieRepository->findAll();
        $test = $peintureRepository->findEverything();

        // dd($test);

        $peintures = $peintureRepository->findAll();

        return $this->render('peinture/index.html.twig', [
            'controller_name' => 'PeintureController',
            'peintures' => $test,
        ]);
    }
}
