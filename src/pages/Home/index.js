import { memo, useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { CircularProgressbar } from 'react-circular-progressbar';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Loading } from '../../components';

import imageNotFound from '../../assets/images/placeholder.png';
import placeholderImage from '../../assets/glyphicons/picture-grey.svg';
import loadingImage from '../../assets/images/loading.svg';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-circular-progressbar/dist/styles.css';

import styles from './styles.module.css';
import api from '../../services/api';

// 1ª Digitação (Aqui)