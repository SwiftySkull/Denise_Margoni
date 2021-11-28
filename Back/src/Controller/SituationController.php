<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class SituationController extends AbstractController
{
    #[Route('/situation', name: 'situation')]
    public function index(): Response
    {
        return $this->render('situation/index.html.twig', [
            'controller_name' => 'SituationController',
        ]);
    }
}
