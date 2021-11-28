<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20211121193955 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE cadre (id INT AUTO_INCREMENT NOT NULL, encadrement VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE categorie (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE peinture (id INT AUTO_INCREMENT NOT NULL, taille_id INT DEFAULT NULL, cadre_id INT DEFAULT NULL, situation_id INT DEFAULT NULL, titre VARCHAR(255) NOT NULL, creation_date DATETIME DEFAULT NULL, hauteur INT DEFAULT NULL, largeur INT DEFAULT NULL, picture VARCHAR(255) DEFAULT NULL, infos LONGTEXT DEFAULT NULL, location VARCHAR(255) DEFAULT NULL, INDEX IDX_8FB3A9D6FF25611A (taille_id), INDEX IDX_8FB3A9D69308DA90 (cadre_id), INDEX IDX_8FB3A9D63408E8AF (situation_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE peinture_categorie (peinture_id INT NOT NULL, categorie_id INT NOT NULL, INDEX IDX_38CEF7CFC2E869AB (peinture_id), INDEX IDX_38CEF7CFBCF5E72D (categorie_id), PRIMARY KEY(peinture_id, categorie_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE peinture_technique (peinture_id INT NOT NULL, technique_id INT NOT NULL, INDEX IDX_A688B9BAC2E869AB (peinture_id), INDEX IDX_A688B9BA1F8ACB26 (technique_id), PRIMARY KEY(peinture_id, technique_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE situation (id INT AUTO_INCREMENT NOT NULL, collection VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE taille (id INT AUTO_INCREMENT NOT NULL, format VARCHAR(4) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE technique (id INT AUTO_INCREMENT NOT NULL, type VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE peinture ADD CONSTRAINT FK_8FB3A9D6FF25611A FOREIGN KEY (taille_id) REFERENCES taille (id)');
        $this->addSql('ALTER TABLE peinture ADD CONSTRAINT FK_8FB3A9D69308DA90 FOREIGN KEY (cadre_id) REFERENCES cadre (id)');
        $this->addSql('ALTER TABLE peinture ADD CONSTRAINT FK_8FB3A9D63408E8AF FOREIGN KEY (situation_id) REFERENCES situation (id)');
        $this->addSql('ALTER TABLE peinture_categorie ADD CONSTRAINT FK_38CEF7CFC2E869AB FOREIGN KEY (peinture_id) REFERENCES peinture (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE peinture_categorie ADD CONSTRAINT FK_38CEF7CFBCF5E72D FOREIGN KEY (categorie_id) REFERENCES categorie (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE peinture_technique ADD CONSTRAINT FK_A688B9BAC2E869AB FOREIGN KEY (peinture_id) REFERENCES peinture (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE peinture_technique ADD CONSTRAINT FK_A688B9BA1F8ACB26 FOREIGN KEY (technique_id) REFERENCES technique (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE peinture DROP FOREIGN KEY FK_8FB3A9D69308DA90');
        $this->addSql('ALTER TABLE peinture_categorie DROP FOREIGN KEY FK_38CEF7CFBCF5E72D');
        $this->addSql('ALTER TABLE peinture_categorie DROP FOREIGN KEY FK_38CEF7CFC2E869AB');
        $this->addSql('ALTER TABLE peinture_technique DROP FOREIGN KEY FK_A688B9BAC2E869AB');
        $this->addSql('ALTER TABLE peinture DROP FOREIGN KEY FK_8FB3A9D63408E8AF');
        $this->addSql('ALTER TABLE peinture DROP FOREIGN KEY FK_8FB3A9D6FF25611A');
        $this->addSql('ALTER TABLE peinture_technique DROP FOREIGN KEY FK_A688B9BA1F8ACB26');
        $this->addSql('DROP TABLE cadre');
        $this->addSql('DROP TABLE categorie');
        $this->addSql('DROP TABLE peinture');
        $this->addSql('DROP TABLE peinture_categorie');
        $this->addSql('DROP TABLE peinture_technique');
        $this->addSql('DROP TABLE situation');
        $this->addSql('DROP TABLE taille');
        $this->addSql('DROP TABLE technique');
    }
}
