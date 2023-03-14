import { useState } from "react";
import axios from "axios";

//vigtig ved authentication med session-cookie
axios.defaults.withCredentials = true;

export const useDeleteData = () => {
  //states til håndtering af data, loading, og error.
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  //hvis headers ikke kommer med er de null - "man kan sende en header med ellers er den null"
  const deleteData = (url, headers = null, params = null) => {
    /* setLoading(true); */

    axios
      .delete(url, { headers: headers, params: params })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setError(false);
      })
      .catch((err) => {
        setError(true);
        setData();
      })
      .finally(() => {
        setLoading(false);
        /* window.location.reload(); */
      });
  };
  //det der 'udbydes' fra hooket her
  return { deleteData, error, loading, data };
};

export const useGetData = () => {
  //states til håndtering af data, loading, og error.
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  //hvis headers ikke kommer med er de null - "man kan sende en header med ellers er den null"
  const getData = (url, headers = null, params = null) => {
    /* setLoading(true); */

    axios
      .get(url, { headers: headers, params: params })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setError(false);
      })
      .catch((err) => {
        console.log("error");
        setError(true);
        setData();
      })
      .finally(() => {
        setLoading(false);
      });
  };
  //det der 'udbydes' fra hooket her
  return { getData, error, loading, data };
};

export const usePatchData = () => {
  //states til håndtering af data, loading, og error.
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  //hvis headers ikke kommer med er de null - "man kan sende en header med ellers er den null, payload er de data der skal postet/oprettes"
  const PatchData = (url, payload = null, headers = null, params = null) => {
    setLoading(true);

    axios
      .patch(url, payload, { headers: headers, params: params })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setError(false);
      })
      .catch((err) => {
        console.log("error");
        setError(true);
        setData();
      })
      .finally(() => {
        setLoading(false);
      });
  };
  //det der 'udbydes' fra hooket her
  return { PatchData, error, loading, data };
};

export const usePostData = () => {
  //states til håndtering af data, loading, og error.
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  //hvis headers ikke kommer med er de null - "man kan sende en header med ellers er den null, payload er de data der skal postet/oprettes"
  const postData = (url, payload = null, headers = null, params = null) => {
    setLoading(true);

    axios
      .post(url, payload, { headers: headers, params: params })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setError(false);
      })
      .catch((err) => {
        console.log("error");
        setError(true);
        setData();
      })
      .finally(() => {
        setLoading(false);
        /* window.location.reload(); */
      });
  };
  //det der 'udbydes' fra hooket her
  return { postData, error, loading, data };
};

export const usePutData = () => {
  //states til håndtering af data, loading, og error.
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  //hvis headers ikke kommer med er de null - "man kan sende en header med ellers er den null, payload er de data der skal postet/oprettes"
  const putData = (url, payload = null, headers = null, params = null) => {
    setLoading(true);

    axios
      .put(url, payload, { headers: headers, params: params })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
        setError(false);
      })
      .catch((err) => {
        console.log("error");
        setError(true);
        setData();
      })
      .finally(() => {
        setLoading(false);
      });
  };
  //det der 'udbydes' fra hooket her
  return { putData, error, loading, data };
};
