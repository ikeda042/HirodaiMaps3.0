import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

function SearchBar() {
  return (
    <div style={{ margin: '10px' }}> {/* 上下左右に10ピクセルのマージンを追加 */}
      <TextField
        fullWidth
        placeholder="学部、建物、講義室で検索(e.g., 総合科学部）"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
}

export default SearchBar;
