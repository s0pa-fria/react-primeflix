import { memo, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTv, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import imageNotFound from '../../assets/images/placeholder.png';
import placeholderImage from '../../assets/glyphicons/picture-grey.svg';

import { Button, Loading } from '../../components'; // Importação de componentes
import { toast } from 'react-toastify'; // Importação do módulo de notificações

import 'react-lazy-load-image-component/src/effects/blur.css'; // Importação de estilos

import styles from './styles.module.css'; // Importação dos estilos locais
import api from '../../services/api'; // Importação do serviço de API

// 2ª Digitação (Aqui)