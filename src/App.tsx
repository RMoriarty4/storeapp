import React from 'react';
import './App.css';

import { Button, Flex, Image, withAuthenticator } from '@aws-amplify/ui-react';
import { Storage } from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';

const App: React.FC = () => {
  const [image, updateImage] = React.useState<{
    key: string | null;
    signedUrl: string | null;
  }>({ key: null, signedUrl: null });

  async function getImage() {
    if (!image.key) return;
    const signedUrl = await Storage.get(image.key);
    updateImage({ ...image, signedUrl });
  }

  async function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const imageInfo = await Storage.put(file.name, file);
    updateImage({ ...image, key: imageInfo.key });
    console.log('image updated,', imageInfo);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Flex direction={'column'} maxWidth="900px">
          <input type="file" accept="image/png" onChange={(e) => onChange(e)} />
          <Button variation="primary" size="large" onClick={getImage}>
            Get Image
          </Button>
          {image.signedUrl && (
            <Image src={image.signedUrl} alt={image.key as string} />
          )}
        </Flex>
      </header>
    </div>
  );
};

export default withAuthenticator(App);
