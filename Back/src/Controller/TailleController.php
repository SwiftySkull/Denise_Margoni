<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TailleController extends AbstractController
{
    #[Route('/taille', name: 'taille')]
    public function index(): Response
    {
        return $this->render('taille/index.html.twig', [
            'controller_name' => 'TailleController',
        ]);
    }
}
