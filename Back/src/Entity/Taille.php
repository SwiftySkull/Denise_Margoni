<?php

namespace App\Entity;

use App\Repository\TailleRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=TailleRepository::class)
 */
class Taille
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=4)
     */
    private $format;

    /**
     * @ORM\OneToMany(targetEntity=Peinture::class, mappedBy="taille")
     */
    private $peintures;

    public function __construct()
    {
        $this->peintures = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFormat(): ?string
    {
        return $this->format;
    }

    public function setFormat(string $format): self
    {
        $this->format = $format;

        return $this;
    }

    /**
     * @return Collection|Peinture[]
     */
    public function getPeintures(): Collection
    {
        return $this->peintures;
    }

    public function addPeinture(Peinture $peinture): self
    {
        if (!$this->peintures->contains($peinture)) {
            $this->peintures[] = $peinture;
            $peinture->setTaille($this);
        }

        return $this;
    }

    public function removePeinture(Peinture $peinture): self
    {
        if ($this->peintures->removeElement($peinture)) {
            // set the owning side to null (unless already changed)
            if ($peinture->getTaille() === $this) {
                $peinture->setTaille(null);
            }
        }

        return $this;
    }
}
