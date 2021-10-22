# Data Dictionary

## Peintures
| Field        | Type         | Specificity                                     | Description                                      |
| ------------ | ------------ | ----------------------------------------------- | ------------------------------------------------ |
| id           | INT          | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT | Identifiant de l'oeuvre                          |
| titre        | VARCHAR (100)| NOT NULL                                        | Date de l'oeuvre                                 |
| date         | DATETIME     | NULL                                            | Titre de l'oeuvre                                |
| hauteur      | TINYINT      | NULL                                            | Hauteur de l'oeuvre                              |
| largeur      | TINYINT      | NULL                                            | Largeur de l'oeuvre                              |
| lieu         | VARCHAR (100)| NULL                                            | Ville, région où se situe l'oeuvre actuellement  |
| infos        | TEXT         | NULL                                            | Informations complémentaires sur l'oeuvre        |
| photo        | TEXT         | NULL                                            | Photo de l'oeuvre                                |
| created_at   | DATETIME     | NOT NULL, CURRENT_TIMESTAMP                     | Date d'enregistrement de l'oeuvre dans la BDD    |
| updated_at   | DATETIME     | NULL                                            | Date de mise à jour de l'oeuvre                  |
| taille       | entity       | NOT NULL                                        | Format de l'oeuvre                               |
| technique    | entity       | NOT NULL                                        | Technique utilisée pour l'oeuvre                 |
| categorie    | entity       | NOT NULL                                        | Catégories de l'oeuvre                           |
| cadre        | entity       | NOT NULL                                        | Type d'encadrement de l'oeuvre                   |
| vente        | entity       | NOT NULL                                        | Statut de vente de l'oeuvre et acheteur          |

## Taille
| Field        | Type         | Specificity                                     | Description                                      |
| ------------ | ------------ | ----------------------------------------------- | ------------------------------------------------ |
| id           | INT          | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT | Identifiant du format                            |
| format       | VARCHAR (10) | NOT NULL                                        | Nom du type de format                            |
| created_at   | DATETIME     | NOT NULL, CURRENT_TIMESTAMP                     | Date d'enregistrement du format                  |
| updated_at   | DATETIME     | NULL                                            | Date de mise à jour du format                    |

## Technique
| Field        | Type         | Specificity                                     | Description                                      |
| ------------ | ------------ | ----------------------------------------------- | ------------------------------------------------ |
| id           | INT          | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT | Identifiant de la technique                      |
| type         | VARCHAR (100)| NOT NULL                                        | Nom de la technique utilisée                     |
| created_at   | DATETIME     | NOT NULL, CURRENT_TIMESTAMP                     | Date d'enregistrement de la technique            |
| updated_at   | DATETIME     | NULL                                            | Date de mise à jour de la technique              |

## Catégorie
| Field        | Type         | Specificity                                     | Description                                      |
| ------------ | ------------ | ----------------------------------------------- | ------------------------------------------------ |
| id           | INT          | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT | Identifiant de la catégorie                      |
| nom          | VARCHAR (100)| NOT NULL                                        | Nom du type de catégorie                         |
| created_at   | DATETIME     | NOT NULL, CURRENT_TIMESTAMP                     | Date d'enregistrement de la catégorie            |
| updated_at   | DATETIME     | NULL                                            | Date de mise à jour de la catégorie              |

## Cadre
| Field        | Type         | Specificity                                     | Description                                      |
| ------------ | ------------ | ----------------------------------------------- | ------------------------------------------------ |
| id           | INT          | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT | Identifiant du type d'encadrement                |
| encadrement  | VARCHAR (100)| NOT NULL                                        | Statut de l'encadrement/Style d'encadrement      |
| created_at   | DATETIME     | NOT NULL, CURRENT_TIMESTAMP                     | Date d'enregistrement de l'encadrement           |
| updated_at   | DATETIME     | NULL                                            | Date de mise à jour de l'encadrement             |

## Vente
| Field        | Type         | Specificity                                     | Description                                      |
| ------------ | ------------ | ----------------------------------------------- | ------------------------------------------------ |
| id           | INT          | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT | Identifiant du statut de vente                   |
| vendu        | VARCHAR (100)| NOT NULL                                        | Etat de la vente, propriétaire actuel            |
| created_at   | DATETIME     | NOT NULL, CURRENT_TIMESTAMP                     | Date d'enregistrement de la vente                |
| updated_at   | DATETIME     | NULL                                            | Date de mise à jour de la vente                  |
