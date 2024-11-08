const DefaultRequestTimeout = 5000;

export const get = async (url: string) => {
  const response = await fetch(url, {
    signal: AbortSignal.timeout(DefaultRequestTimeout),
    headers: {
      Accept: "application/xrds+xml,text/html,text/plain,*/*;q=0.9",
    },
  });

  return {
    status: response.status,
    statusText: response.statusText,
    data: await response.text(),
    headers: Object.fromEntries(response.headers),
  };
};
