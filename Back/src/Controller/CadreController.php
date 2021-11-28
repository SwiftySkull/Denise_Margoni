<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CadreController extends AbstractController
{
    #[Route('/cadre', name: 'cadre')]
    public function index(): Response
    {
        return $this->render('cadre/index.html.twig', [
            'controller_name' => 'CadreController',
        ]);
    }
}
