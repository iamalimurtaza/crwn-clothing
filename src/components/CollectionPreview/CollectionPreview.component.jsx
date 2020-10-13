import React from 'react';
import CollectionItem from '../CollectionItem/CollectionItem.component';
import './CollectionPreview.styles.scss';

const CollectionPreview = ({ title, items }) => {
	return (
		<div className='collection-preview'>
			<h2 className='title'>{title}</h2>
			<div className='preview'>
				{items
					.filter((item, idx) => idx < 4)
					.map(({ id, ...CollectionOtherProps }) => (
						<CollectionItem key={id} {...CollectionOtherProps} />
					))}
			</div>
		</div>
	);
};
export default CollectionPreview;
