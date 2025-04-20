import React, { useEffect, useState } from 'react';
import Header from '../components/header/Header1';
import mockAlumniData from '../data/mockAlumni';
import './AlumniDirectory.css';

const AlumniDirectory = () => {
  const [alumni, setAlumni] = useState([]);
  const [filteredAlumni, setFilteredAlumni] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    graduationYear: null,
    branch: null,
    location: null
  });
  const [branches, setBranches] = useState([]);
  const [years, setYears] = useState([]);
  const [locations, setLocations] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  // Load mock data instead of fetching from API
  useEffect(() => {
    // Simulate loading delay
    setIsLoading(true);
    setTimeout(() => {
      setAlumni(mockAlumniData);
      setFilteredAlumni(mockAlumniData);
      setIsLoading(false);
    }, 1000);
  }, []);

  // Extract unique values for filters
  useEffect(() => {
    if (alumni.length) {
      const uniqueBranches = [...new Set(alumni.map(a => a.branch))];
      setBranches(uniqueBranches);

      const uniqueYears = [...new Set(alumni.map(a => a.graduationYear))].sort((a, b) => b - a);
      setYears(uniqueYears);

      const uniqueLocations = [...new Set(alumni.map(a => a.location ? a.location.split(',')[0].trim() : ''))];
      setLocations(uniqueLocations.filter(location => location));
    }
  }, [alumni]);

  // Apply filters and search
  useEffect(() => {
    let result = alumni;

    // Apply filters
    if (filters.graduationYear) {
      result = result.filter(a => a.graduationYear === filters.graduationYear);
    }
    if (filters.branch) {
      result = result.filter(a => a.branch === filters.branch);
    }
    if (filters.location) {
      result = result.filter(a => a.location && a.location.includes(filters.location));
    }

    // Apply search
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      result = result.filter(a => 
        (a.name && a.name.toLowerCase().includes(term)) || 
        (a.title && a.title.toLowerCase().includes(term)) || 
        (a.company && a.company.toLowerCase().includes(term))
      );
    }

    setFilteredAlumni(result);
  }, [alumni, filters, searchTerm]);

  const setFilter = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const clearFilters = () => {
    setFilters({
      graduationYear: null,
      branch: null,
      location: null
    });
    setSearchTerm('');
  };

  return (
    <>
      <Header />
      <div className="alumni-container">
        <div className="header-section">
          <div>
            <h1>Alumni Directory</h1>
            <p>Connect with alumni from around the world</p>
          </div>
        </div>

        {showFilters && (
          <div className="filters-panel">
            <div className="filters-header">
              <h3>Filters</h3>
              <button className="clear-btn" onClick={clearFilters}>
                Clear All
              </button>
            </div>

            <div className="filters-grid">
              <div className="filter-group">
                <label>Graduation Year</label>
                <select
                  value={filters.graduationYear?.toString() || ''}
                  onChange={(e) => {
                    const value = e.target.value ? parseInt(e.target.value) : null;
                    setFilter('graduationYear', value);
                  }}
                >
                  <option value="">All Years</option>
                  {years.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label>Branch</label>
                <select
                  value={filters.branch || ''}
                  onChange={(e) => {
                    const value = e.target.value || null;
                    setFilter('branch', value);
                  }}
                >
                  <option value="">All Branches</option>
                  {branches.map((branch) => (
                    <option key={branch} value={branch}>{branch}</option>
                  ))}
                </select>
              </div>

              <div className="filter-group">
                <label>Location</label>
                <select
                  value={filters.location || ''}
                  onChange={(e) => {
                    const value = e.target.value || null;
                    setFilter('location', value);
                  }}
                >
                  <option value="">All Locations</option>
                  {locations.map((location) => (
                    <option key={location} value={location}>{location}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}

        {(Object.values(filters).some(v => v !== null) || searchTerm) && (
          <div className="active-filters">
            {Object.entries(filters)
              .filter(([_, value]) => value !== null)
              .map(([key, value]) => (
                <div key={key} className="filter-badge">
                  <span>{key === 'graduationYear' ? 'Year' : key}: {value}</span>
                  <button
                    onClick={() => setFilter(key, null)}
                    className="remove-filter"
                  >
                    ✕
                  </button>
                </div>
              ))}

            {searchTerm && (
              <div className="filter-badge">
                <span>Search: {searchTerm}</span>
                <button
                  onClick={() => setSearchTerm('')}
                  className="remove-filter"
                >
                  ✕
                </button>
              </div>
            )}

            <button
              onClick={clearFilters}
              className="clear-all-text"
            >
              Clear All
            </button>
          </div>
        )}

        {isLoading ? (
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
        ) : filteredAlumni.length > 0 ? (
          <div className="alumni-grid">
            {filteredAlumni.map((alumnus) => (
              <div key={alumnus.id} className="alumni-card">
                <div className="alumni-avatar">
                  {alumnus.profileImage ? (
                    <img src={alumnus.profileImage} alt={alumnus.name} />
                  ) : (
                    <div className="avatar-placeholder">
                      {alumnus.name ? alumnus.name.charAt(0) : 'A'}
                    </div>
                  )}
                </div>
                <h3 className="alumni-name">{alumnus.name}</h3>
                <p className="alumni-title">{alumnus.title}</p>
                <p className="alumni-company">{alumnus.company}</p>
                <p className="alumni-year">Class of {alumnus.graduationYear}</p>
                <p className="alumni-branch">{alumnus.branch}</p>
                <p className="alumni-location">{alumnus.location}</p>
                <button className="connect-btn">Connect</button>
              </div>
            ))}
          </div>
        ) : (
          <div className="no-results">
            <h3>No alumni found</h3>
            <p>Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      <footer id="footer">
        <div class="container footer-bottom clearfix">
        <div class="copyright">
            &copy; Copyright <strong><span>Connect Jamia</span></strong>. All Rights Reserved
        </div>
        
        </div>
       </footer>
    </>
  );
};

export default AlumniDirectory;