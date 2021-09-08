import axios from 'axios';
import jwt_decode from 'jwt-decode';

const api_url = process.env.server_url || "http://localhost:3001/api/users";

export const TOKEN_SESSION_ATTRIBUTE_NAME = 'token';
export const TOKEN_HEADER_LENGTH = 7;

