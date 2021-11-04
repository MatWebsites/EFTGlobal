module.exports = {
  upload: {
      provider: 'google-cloud-storage',
      providerOptions: {
          bucketName: 'easyhsc',
          publicFiles: true,
          uniform: false,
          serviceAccount: {
            "type": "service_account",
            "project_id": "modular-oven-287901",
            "private_key_id": "f54a6244258d2026f36b3c5ee3dec4c97df31717",
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDCV3n/qNwV+OUi\npre6HzLS0XzA52BUi1xcGne/KLA5BMMKqJijPRmKigDH3bVGie3cB9/fI8f21iBs\njXOBWVu+JoITFwMe39kI/WYhLsOc854PTKcnhfvAAxZXrz0uM53+Hg01Qn7olETn\nerd0Pr6KbgO2iqb8zYLC0Q1rnAzOOKU1UBVe0oM4m8MFjDo4+3d/+7dzRWjFaqj/\nfKUPLqZR13ee3mqVt9I8qBlgFOxdOfoVVZfSR8wqkJ4cGfZ33oJz5SdimXIOoh12\nGB2IHx1sIRbybVw603udOemGk2RRc1V61jScCZ3QmA2innoY37BNJ6FUX1EIxRmA\nBzCmjoXbAgMBAAECggEAA7Rp3aHOcEIfvBq0LewiVTqBHPxMLdBqS6cwLoi2s0o6\nnZ1mgNYirS1sTmMU7ZSmNXzrm56xqoGdJJ9IWxLlA371w9S7I9Td7PnyVHebwFuJ\n4SjI7Ev1kfd9GYwm/RZ8JeKqGyB6uDGmDp5G7lmz2te2DRN06M98yqdJkN+XWZGv\noskPKHop3ulDrMG3KeJuv0AGJRI9hMlPLLmJdaVlCeX1Fqt7Ff4n75MUtdyHyy4V\nqA7sys5fb5rsdjTzZ7UIpHvLo2mSvGwpRW0ei2ZV84yTRQeoqkPLOk6eqs40GTJF\n8OwfX1Pdb7fWgfJ9aROJaNEjk/5Nm4hAZwwCr5GFoQKBgQD8dI0TsbyK+482U3dB\nAYyMu3Ng0WbTmYVeAjkChMJbtS5tGxDecBTLcewoJR7BaplZjbSyw1FXnJ43mC3N\nvl+TSIt3Ywp9NU/vnxZw5KhLBQ39qY0HqtnXU8TmH4W6tF8b1mODBtscX3uJ1YxJ\nwSa3/03GRjmOMxnC7/SMz+A6BQKBgQDFEglezMflcJcVtRNZvhK3Dxkg27Ypuajr\nxJA7tQF2MpYfsmfTbTy5HkPxlWnxoesK6q95VM2PeG0PIQDdusWf5mk8UYwOqxnS\nzt3juJgmcGR8IcDWN6IuYAdBZyXuCia1Bqei8SMlulgqXjc0Qavkj3I6LKKQde/t\nhQ9HlD9mXwKBgFjRZITmRjAbevIhAVbEhb9Jf7kzUtrlKy+81nPVY0/CeZf3KsMn\naZl99hjVnnFr4JHKMiWmY+rP9jYW+x5keNmnbzHMjXcpl3r1XH7RY4gpOhfhW/Wz\nnTqNhTt1IaZjKQbxMUd61QGxchQ3JkkYhFe9oY49TKiDv+9+XmpgBEJFAoGALcRG\nkNGWCt7e95eZ6tmNlx3WhB8CayZG6Jo5tOQQdtbArpPMMPnJhGRW+x/r/sXPxDVE\nkzTymEMrcLwFa3kYtE3aWrvFfxKVaLPKLDyOeT7Y10svcZByBbsfdDz0Phf1bU0i\nWWEO/JAOMai3wVcPCIGX0ZLUHiCFm++u4Ly5DJkCgYEAx87UJJiQCU+rIt/C3usd\nukH1/HUDKKOK+OnzrC7csncrjgWuGZJgb5EpOd72Nz0LsGf00JEASb388NZ5RU8G\nXOaMgP6Diw3u8AVuFmi3LkbUqjhU/jHGF8tr0sfF0eQzhER3fbSw8K6SttjgVMZN\npKk5p1pQjw3s0sL6Y38szJw=\n-----END PRIVATE KEY-----\n",
            "client_email": "strapi-easyhsc@modular-oven-287901.iam.gserviceaccount.com",
            "client_id": "106616263335355422394",
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/strapi-easyhsc%40modular-oven-287901.iam.gserviceaccount.com"
          }, // replace `{}` with your serviceAccount JSON object
          baseUrl: 'https://storage.googleapis.com/easyhsc',
          basePath: '',
      },
    },
  //...
}
