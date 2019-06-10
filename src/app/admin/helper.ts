export function isLoggedInHelper(response) {
  const success = response.success;
  if (success === 'true') {
    return true;
  } else {
    return false;
  }
}
