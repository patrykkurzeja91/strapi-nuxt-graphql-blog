module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3-resizing-and-optimisation',
    providerOptions: {
      accessKeyId: env('AWS_ACCESS_KEY_ID'),
      secretAccessKey: env('AWS_ACCESS_SECRET'),
      region: env('AWS_REGION'),
      optimizeOptions: {
        jpeg: {
          quality: 90,
          progressive: true,
        },
        png: {
          quality: 90,
          progressive: true,
        },
        webp: {
          alphaQuality: 90,
        },
        tiff: {}
      },
      imageSizes: [
        {
          name: 'large',
          resizeOptions: {
            width: 1400
          },
          isGenerateWebp: true,
        },
        {
          name: 'medium',
          resizeOptions: {
            width: 700
          },
          isGenerateWebp: true,
        },
        {
          name: 'small',
          resizeOptions: {
            width: 500
          },
          isGenerateWebp: true,
        },
        {
          name: 'thumbnail',
          resizeOptions: {
            width: 150
          },
          isGenerateWebp: true,
        },
      ],
      params: {
        Bucket: env('AWS_BUCKET_NAME'),
      },
    },
  }
  // upload: {
  //   provider: 'aws-s3',
  //   providerOptions: {
  //     accessKeyId: env('AWS_ACCESS_KEY_ID'),
  //     secretAccessKey: env('AWS_ACCESS_SECRET'),
  //     region: env('AWS_REGION'),
  //     params: {
  //       Bucket: env('AWS_BUCKET_NAME'),
  //     },
  //   },
  // }
});
